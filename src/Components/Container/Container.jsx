/*
    ./src/components/Container.jsx
*/
import React from 'react';
import '../../css/globalStyle';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            question: '',
            answer: ''
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    /*<Calc_display/>
    <Calc_keyboard/> */

    handleClick(value,type) {
        if(this.state.question.length < 9){
            if(this.state.question.length > 0 ){
                if(type == 'inputO'){
                    this.setState(state => ({
                        isToggleOn: !state.isToggleOn,
                        question: this.state.question.toString() + value
                    }));
                    let op = 0;
                    let num = 0;
                    for (let i = 0; i < question.length; i++) {
                        const e = question[i];
                        if(e == '%' || e == '/' || e == '+' || e == '-' || e==document.getElementById('times').innerHTML){
                            op++;
                        }else{
                            num++;
                        }
                        if(op== 2 && num==1){
                            question[i] = ' ';
                            op==0;
                        }
                    }
                    
                    //this.setState({question: this.state.question.toString() + buttonValue})
                }else if(type == 'inputN'){
                    this.setState({
                        question: this.state.question.toString() + value
                    });
                }else if(type == 'actionE'){
                    for (let index = 0; index < question.length; index++) {
                        
                        const element = array[index];
                        
                    }
                }else if(type == 'action'){
                    this.setState({
                        question: ''
                    });
                }
            }else{
                if(type == 'inputN'){
                    this.setState({
                        question: value
                    });
                }
            }
        }else{
            if(type == 'action'){
                this.setState({
                    question: ''
                });
            }
        }
    }

    handleValues(){
        
    }

    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        //window.addEventListener('scroll', this.handleScroll);
        return (
            <div className='container'>
                <div className='calcName'>
                    Simple Calculator
                </div>
                <input className='display numbers' readOnly value={this.state.question}/>
                <div className='keyboard'>
                    <div className='keyboard-buttons-grid'>
                        <button id='AC' onClick={() => this.handleClick(document.getElementById('AC').innerHTML,'action')} className="buttons">AC</button>
                        <button id='C' onClick={() => this.handleClick(document.getElementById('C').innerHTML,'action')} className="buttons">C</button>
                        <button id='%' onClick={() => this.handleClick(document.getElementById('%').innerHTML,'inputO')} className="buttons">%</button>
                        <button id='slash' onClick={() => this.handleClick(document.getElementById('slash').innerHTML,'inputO')} className="buttons">/</button>

                        <button id='7' onClick={() => this.handleClick(document.getElementById('7').innerHTML,'inputN')} className="buttons">7</button>
                        <button id='8' onClick={() => this.handleClick(document.getElementById('8').innerHTML,'inputN')} className="buttons">8</button>
                        <button id='9' onClick={() => this.handleClick(document.getElementById('9').innerHTML,'inputN')} className="buttons">9</button>
                        <button id='times' onClick={() => this.handleClick(document.getElementById('times').innerHTML,'inputO')} className="buttons">&times;</button>

                        <button id='4' onClick={() => this.handleClick(document.getElementById('4').innerHTML,'inputN')} className="buttons">4</button>
                        <button id='5' onClick={() => this.handleClick(document.getElementById('5').innerHTML,'inputN')} className="buttons">5</button>
                        <button id='6' onClick={() => this.handleClick(document.getElementById('6').innerHTML,'inputN')} className="buttons">6</button>
                        <button id='plus' onClick={() => this.handleClick(document.getElementById('plus').innerHTML,'inputO')} className="buttons">+</button>

                        <button id='1' onClick={() => this.handleClick(document.getElementById('1').innerHTML,'inputN')} className="buttons">1</button>
                        <button id='2' onClick={() => this.handleClick(document.getElementById('2').innerHTML,'inputN')} className="buttons">2</button>
                        <button id='3' onClick={() => this.handleClick(document.getElementById('3').innerHTML,'inputN')} className="buttons">3</button>
                        <button id='minus' onClick={() => this.handleClick(document.getElementById('minus').innerHTML,'inputO')} className="buttons">-</button>

                        <button id='plusminus' onClick={() => this.handleClick(document.getElementById('plusminus').innerHTML,'actionPM')} className="buttons">&#8723;</button>
                        <button id='0' onClick={() => this.handleClick(document.getElementById('0').innerHTML,'inputN')} className="buttons">0</button>
                        <button id='dot' onClick={() => this.handleClick(document.getElementById('dot').innerHTML,'decimal')} className="buttons">.</button>
                        <button id='equals' onClick={() => this.handleClick(document.getElementById('equals').innerHTML,'actionE')} className="buttons">=</button>
                    </div>
                </div>
            </div>
        );
    }
}