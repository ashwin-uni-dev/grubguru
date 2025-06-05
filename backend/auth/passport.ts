import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {UserService} from "../services/userService";
import {IUser, User} from "../schemas/user";

const userService = UserService.create();

declare global {
    namespace Express {
        interface User extends IUser {}
    }
}

passport.use(
    new LocalStrategy(async (username: string, password: string, done: any) => {
        try {
            const user = await userService.authenticateUser(username, password);
            if (!user) return done(null, false, { message: 'Invalid login' });

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user: any, done: any) => {
    done(null, user.username);
});

passport.deserializeUser(async (username: string, done: any) => {
    try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export default passport;
