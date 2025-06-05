import Layout from "../../../components/Layout";
import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";
import DonePreference from "../components/donePreference";
import ProgressivePage from "../../../components/ProgressivePage";
import {useNavigate} from "react-router-dom";

const Budget = () => {
    const { addOrUpdatePreference } = usePreferences();
    const navigate = useNavigate();
    const [budget, setBudget] = useState<number>(10);

    const minBudget = 0;
    const maxBudget = 200;
    const stepBudget = 1;

    const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(event.target.value));
    };

    const handleDone = () => {
        addOrUpdatePreference({ id: 'budget', value: budget });
        navigate('../preferences');
    }

    return (
        <Layout back={true}>
            <div className='flex flex-col h-full'>
                <ProgressivePage title="What's your budget" action={handleDone} final={true}>
                    <div className='mt-6'>
                        <p>
                            £
                            <input
                                type='number'
                                min={minBudget}
                                max={maxBudget}
                                step={stepBudget}
                                value={budget}
                                onChange={handleBudgetChange}
                                className='text-4xl font-semibold tracking-tighter inline-block border-b-2'
                                style={{ width: `${String(budget).length * 20 + 20}px` }}
                            />
                        </p>
                        <input
                            type='range'
                            min={minBudget}
                            max={maxBudget}
                            step={stepBudget}
                            value={budget}
                            onChange={handleBudgetChange}
                            className='w-full'
                        />
                    </div>
                </ProgressivePage>
            </div>
        </Layout>
    );
}

export default Budget;