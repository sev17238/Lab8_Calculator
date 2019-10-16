/*
    ./src/components/Container.jsx
*/
import React from 'react';
import '../../css/globalStyle';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storedResult: null,
            question: '',
            answer: '',
            currentValue: '0',
            isNegative: false,
            hasDecDot: false
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    removeDuplicateOperators(string){
        return string
            .split('')
            .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
            })
            .join('');
       }

    handleEqual(){
        let question_ = this.state.question
        if(question_.includes('%')){
            if(this.state.hasDecDot == false){
                let nums = question_.split('%')
                let answer = parseInt(nums[0]) % parseInt(nums[1])
                if(answer.length > 9){
                    this.setState({
                        question: '',
                        currentValue: 'ERROR'
                    });
                }else{
                    this.setState({
                        question: '',
                        currentValue: answer,
                        storedResult: answer
                    });
                }  
            }else{
                this.setState({
                    question: '',
                    currentValue: 'ERROR',
                    hasDecDot: false
                });
            }
        }else if(question_.includes('/')){
            let answer = '0';
            let nums = question_.split('/')
            if(this.state.hasDecDot == false){
                answer = parseInt(nums[0]) / parseInt(nums[1])
            }else{
                answer = parseFloat(nums[0]) / parseFloat(nums[1])
            }
            let answerL = answer.toFixed(3);
            if(answerL.length > 9){
                this.setState({
                    question: '',
                    currentValue: 'ERROR',
                    hasDecDot: false
                });
            }else{
                this.setState({
                    question: '',
                    currentValue: answerL,
                    storedResult: answer,
                    hasDecDot: false
                });
            }
        }else if(question_.includes(document.getElementById('times').innerHTML)){
            let nums = question_.split(document.getElementById('times').innerHTML)
            let answer = '0';
            if(this.state.hasDecDot == false){
                answer = parseInt(nums[0]) * parseInt(nums[1])
            }else{
                answer = parseFloat(nums[0]) * parseFloat(nums[1])
            }
            let answerL = answer.toFixed(3);
            if(answer.length > 9){
                this.setState({
                    question: '',
                    currentValue: 'ERROR',
                    hasDecDot: false
                });
            }else{
                this.setState({
                    question: '',
                    currentValue: answerL,
                    storedResult: answerL,
                    hasDecDot: false
                });
            }
        }else if(question_.includes('+')){
            let nums = question_.split('+')
            let answer = '0';
            if(this.state.hasDecDot == false){
                answer = parseInt(nums[0]) + parseInt(nums[1])
            }else{
                answer = parseFloat(nums[0]) + parseFloat(nums[1])
            }
            if(answer.length > 9){
                this.setState({
                    question: '',
                    currentValue: 'ERROR',
                    hasDecDot: false
                });
            }else{
                this.setState({
                    question: '',
                    currentValue: answer,
                    storedResult: answer,
                    hasDecDot: false
                });
            }
        }else if(question_.includes('-')){
            let nums = question_.split('-')
            let answer = '0';
            if(this.state.hasDecDot == false){
                answer = parseInt(nums[0]) - parseInt(nums[1])
            }else{
                answer = parseFloat(nums[0]) - parseFloat(nums[1])
            }
            if(answer.length > 9){
                this.setState({
                    question: '',
                    currentValue: 'ERROR',
                    hasDecDot: false
                });
            }else{
                this.setState({
                    question: '',
                    currentValue: answer,
                    storedResult: answer,
                    hasDecDot: false
                });
            }
        }
    }

    handleClick(value,type) {
        /*String.prototype.replaceAt = function (index, char) {
            if(char=='') {
                return this.slice(0,index)+this.substr(index+1 + char.length);
            } else {
                return this.substr(0, index) + char + this.substr(index + char.length);
            }
        }*/
        if(this.state.question.length < 9){
            if(this.state.question.length > 0 ){
                if(type == 'inputO'){
                    this.setState(state => ({
                        isToggleOn: !state.isToggleOn,
                        question: this.state.question.toString() + value,
                        currentValue: this.state.question.toString() + value
                    }));
                    let question_ = this.state.question;
                    for (let i = 0; i < question_.length; i++) {
                        const e = question_[i];
                        const ee = question_[i+1];

                        if(e === '%' || e=='/' || e == '+' || e==document.getElementById('times').innerHTML){
                            if(e !== ee){
                                this.setState({
                                    question: question_,
                                    currentValue: question_
                                });
                            }else if(e === ee){
                                question_[ee] == 'r'
                                this.setState({
                                    question: question_,
                                    currentValue: question_
                                });
                            }
                            /*question_.replaceAt(ee,'p');
                            this.setState({
                                question: question_,
                                currentValue: question_
                            });*/
                        }else if( e == '-' ){
                            this.setState({
                                question: question_,
                                currentValue: question_
                            });
                        }
                    }
                }else if(type == 'inputN'){
                    this.setState({
                        question: this.state.question.toString() + value,
                        currentValue: this.state.question.toString() + value
                    });
                }else if(type == 'decimal'){
                    this.setState({
                        question: this.state.question.toString() + value,
                        currentValue: this.state.question.toString() + value,
                        hasDecDot: true
                    });
                }else if(type == 'actionE'){
                    this.handleEqual()
                }else if(type == 'action'){
                    this.setState({
                        question: '',
                        currentValue: '0'
                    });
                }else if(type == 'actionPM'){
                   /* this.setState(state => ({
                        isNegative: !state.isNegative,
                    }));
                    this.setState(state => ({
                        question: this.state.question + this.state.isNegative ? '-' : '+',
                        currentValue: this.state.question + this.state.isNegative ? '-' : '+'
                    }));*/
                }
            }else{
                if(type == 'inputN'){
                    this.setState({
                        question: value,
                        currentValue: value
                    });
                }else if(type == 'action'){
                    this.setState({
                        question: '',
                        currentValue: '0'
                    });
                }
            }
        }else{
            if(type == 'action'){
                this.setState({
                    question: '',
                    currentValue: '0'
                });
            }else if(type == 'actionE'){
                this.handleEqual()
            }
        }
    }

    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        //window.addEventListener('scroll', this.handleScroll);
        return (
            <div className='container'>
                <div className='calcName'>
                    Simple Calculator
                </div>
                <input className='display numbers' readOnly value={this.state.currentValue}/>
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