import Layout from "../../../components/Layout";
import React, { useState } from "react";
import { usePreferences } from "../contexts/preferenceContext";
import DonePreference from "../components/donePreference";

const Budget = () => {
    const { addOrUpdatePreference } = usePreferences();
    const [budget, setBudget] = useState<number>(10);

    const minBudget = 0;
    const maxBudget = 200;
    const stepBudget = 1;

    const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(Number(event.target.value));
    };

    return (
        <Layout back={true}>
            <div className='flex flex-col h-full'>
                <h1 className='text-2xl font-bold tracking-tighter text-gray-800'>What's your budget?</h1>
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
                <DonePreference id='budget' value={budget}/>
            </div>
        </Layout>
    );
}

export default Budget;