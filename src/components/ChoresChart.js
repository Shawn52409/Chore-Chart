import React from 'react';
import choreList from './ChoreList';
import backgroundImage from './img/Teddys.jpg';

export default function ChoreChart() {
    return(
        <div id='form' style={{ backgroundImage: `url(${backgroundImage})`}}>
            
            <form>
            <div class="fixTableHead">
                <div class="text-center p-4">
                    <button id="reset-btn" type="reset">Remove All Checks</button>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Do Not Count</th>
                        <th class="text-left pl-3">Chore Name</th>
                        <th id="caseyName">Casey</th>
                        <th id="connorName">Connor</th>
                        </tr>
                    </thead>            
                    {choreList.map((choreList, idx) => {
                        return(
                            <tr>
                                <td><input type="checkbox" name={`${choreList.chore}`}/></td>
                                <td className="text-left pl-3">{choreList.choreName}</td>
                                <td><input type="checkbox" name={`${choreList.caseyCompletedChore}`} id={`caseyCompletedChore${[idx]}`}/></td>
                                <td><input type="checkbox" name={`${choreList.connorCompletedChore}`} id={`connorCompletedChore${[idx]}`}/></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <div class="text-center m-4">
                <button id="startCoinCeremony-btn"><span className="p-2 img-fluid img-smaller img-spin">💰</span>Start Coin Ceremony<span className="p-2">💰</span></button>
            </div>
            </form>
        </div>
    );

};
