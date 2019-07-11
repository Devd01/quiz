import React, { Component } from 'react';
import { questionListAll, questionListWithResponse } from '../../actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Style from './quizcontainer.module.css';
//Components imports
import Loading from '../../widgets/loading/loading';

class quizContainer extends Component {
   state={
       questionList:[],
       questionId:0,
       disabled:false,
       Class:'',
       userAnswer:[]
       
   }

componentWillMount(){
this.props.dispatch(questionListAll())
}

componentWillReceiveProps(nextProps){
    console.log('this.props',this.state.questionList,nextProps)
    if(nextProps.questions.questionList!==this.state.questionList)
        {    console.log('inside')
             this.setState({questionList:nextProps.questions.questionList})}
}

handleAnswer=answer=>{
    const { questionId,questionList,userAnswer } =this.state;
    console.log(answer ,questionList[questionId].correct_answer)
    if (questionList[questionId].correct_answer === answer){
    userAnswer[questionId]=true
    }else{userAnswer[questionId]=false}
    this.setState({userAnswer})

    if (questionId<questionList.length-1){
    setTimeout(()=>this.setState({questionId:this.state.questionId+1}),500)
    } else {
        console.log('inside else',this.state.userAnswer)
        this.props.dispatch(questionListWithResponse(this.state.userAnswer))
        // questionListWithResponse
        //  Redirect();
        this.props.history.push("/")
        // return <Redirect to="/home" push={true} />
        }
    

    

    // this.setState({disabled:!this.state.disabled})


}
decodeHTML=html=>{
    return String(html)
    .replace(/&amp;/g,'&')
    .replace( /&quot;/g,'"')
    .replace( /'/g,'\'')
    .replace( /&lt;/g,'<')
    .replace( /&gt;/g,'>')
    .replace(/&#039;/g,'\'')
}


    render() {
        console.log(this.props,this.state)
        const { questionId,questionList } =this.state;
        return (
            questionList!==undefined && questionList.length>0?
            <div>
               {/* {this.decodeHTML(questionList[questionId].question)} */}
               <div>{questionList[questionId].question}</div>
                <div>
                        <Button data-value="True"  className={Style.answerButton} onClick={()=>this.handleAnswer('True')} variant="contained" color="primary" >
                            True
                        </Button>
                        <Button data-value="False"  onClick={()=>this.handleAnswer('False')} variant="contained" color="primary" >
                            False
                        </Button>


                </div>
            </div>
            :
            < Loading/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps,null)(quizContainer);