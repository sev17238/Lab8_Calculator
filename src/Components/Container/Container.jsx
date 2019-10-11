/*
    ./src/components/Container.jsx
*/
import React from 'react';
import '../../css/globalStyle';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,buttonValue: ''};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    /*<Calc_display/>
    <Calc_keyboard/> */

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            buttonValue: 'SS'
        }));
    }

    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        //window.addEventListener('scroll', this.handleScroll);
        return (
            <div className='container'>
                <div className='calcName'>
                    Simple Calculator
                </div>
                <input className='display numbers' defaultValue='123456789' maxlength="9"/>
                <div className='keyboard'>
                    <div className='keyboard-buttons-grid'>
                        <button onClick={this.handleClick} className="buttons">{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                        <button className="buttons">C</button>
                        <button className="buttons">%</button>
                        <button className="buttons">/</button>

                        <button className="buttons">7</button>
                        <button className="buttons">8</button>
                        <button className="buttons">9</button>
                        <button className="buttons">&times;</button>

                        <button className="buttons">4</button>
                        <button className="buttons">5</button>
                        <button className="buttons">6</button>
                        <button className="buttons">+</button>

                        <button className="buttons">1</button>
                        <button className="buttons">2</button>
                        <button className="buttons">3</button>
                        <button className="buttons">-</button>

                        <button className="buttons">&#8723;</button>
                        <button className="buttons">0</button>
                        <button className="buttons">.</button>
                        <button className="buttons">=</button>
                    </div>
                </div>
            </div>
        );
    }
}