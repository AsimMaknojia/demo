import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

    render(){
        return(
            <div className='container'>

                <h1>Calculator Appssss</h1>
                <table>
                    <tr>
                        <td colspan="3">
                            <input type='text' id='result' className='screen'/>
                        </td>
                        <td>
                            <input type='button' value = 'C' onClick={window['clearScreen']} className='clear'/>
                        </td>
                    </tr>
                </table>

                <div class="keys">
                    <input type="button" value="7" className='button' onClick="display('7')"></input>
                    <input type="button" value="8" className='button' onClick="display('8')"></input>
                    <input type="button" value="9" className='button' onClick="display('9')"></input>
                    <input type="button" value="/" className='operator' onClick="display('/')"></input>
                    <input type="button" value="4" className='button' onClick="display('4')"></input>
                    <input type="button" value="5" className='button' onClick="display('5')"></input>
                    <input type="button" value="6" className='button' onClick="display('6')"></input>
                    <input type="button" value="*" className='operator' onClick="display('*')"></input>
                    <input type="button" value="1" className='button' onClick="display('1')"></input>
                    <input type="button" value="2" className='button' onClick="display('2')"></input>
                    <input type="button" value="3" className='button' onClick="display('3')"></input>
                    <input type="button" value="-" className='operator' onClick="display('-')"></input>
                    <input type="button" value="0" className='button' onClick="display('0')"></input>
                    <input type="button" value="." className='button' onClick="display('.')"></input>
                    <input type="button" value= "=" className='button equal-sign' onClick={window['solve']}></input>
                    <input type="button" value="+" className='operator' onClick="display('+')"></input>
                </div> 
            </div>
        )   
    }
}
export default Calculator