import React from 'react'

const CalcHistory = (props) => {

    const { prevCalcs } = props;

    

    return (
        <div className='CalcHistoryContainer'>
            <p>Past calculations</p>
            {prevCalcs.map((historyItem) => {

                const { x, y, operator, answer, id } = historyItem;
                

                return (
                    <div className='historyItem'>
                        <div className='row1'>
                            <p className='operation'>{x} {operator} {y}</p>
                            <p className='op-id'>{id}</p>
                        </div>
                        <div className='row2'>
                            <p className='answer'>= {answer}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CalcHistory;