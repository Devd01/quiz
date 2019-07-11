import React, { Component } from 'react';
import { questionListAll, questionListWithResponse } from '../../actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Style from './quizcontainer.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//Components imports
import Loading from '../../widgets/loading/loading';
import Snackbar from '../../widgets/snackbar/snackbar';

class quizContainer extends Component {
   state={
       questionList:[],
       questionId:0,
       disabled:false,
       Class:'',
       userAnswer:[],
       open:false,
       message:''
       
   }

componentWillMount(){
this.props.dispatch(questionListAll())
}

componentWillReceiveProps(nextProps){
    
    if(nextProps.questions.questionList!==this.state.questionList)
        {    
             this.setState({questionList:nextProps.questions.questionList})}
}

handleClose =()=> {
    this.setState({open: false });
  }

handleAnswer=answer=>{
    const { questionId,questionList,userAnswer } =this.state;
    let message = ''
    
    if (questionList[questionId].correct_answer === answer){
    userAnswer[questionId]=true
    message='You are Right'
    }else{
        userAnswer[questionId]=false
        message='Wrong Answer'
    }
    this.setState({userAnswer,open:true,message,disabled:!this.state.disabled})

    if (questionId<questionList.length-1){
    setTimeout(()=>this.setState({questionId:this.state.questionId+1,disabled:!this.state.disabled}),500)
    } else {
        
        this.props.dispatch(questionListWithResponse(this.state.userAnswer))
        setTimeout(()=>this.props.history.push("/"),500)
        }
    

    

    // this.setState({disabled:!this.state.disabled})


}
    render() {
        
        const { questionId,questionList, disabled } =this.state;
        return (
            questionList!==undefined && questionList.length>0?
            <React.Fragment>
            <CssBaseline />
            <Container >
            
               
               <Typography className={Style.quizwrapper} component="div" style={{ backgroundColor: '#cfe8fc', height: '100%' ,minHeight:'100vh'}} >
                        
                       <div>{questionList[questionId].question}</div>
                       <div>
                        <Button data-value="True" disabled={disabled}  className={Style.answerButton} onClick={()=>this.handleAnswer('True')} variant="contained" color="primary" >
                            True
                        </Button>
                        <Button data-value="False" disabled={disabled} onClick={()=>this.handleAnswer('False')} variant="contained" color="primary" >
                            False
                        </Button>
                        </div>
                </Typography>
                < Snackbar open = {this.state.open} handleClose = {this.handleClose} message={this.state.message}/>
        
            
            </Container>
          </React.Fragment>
            :
            <div className={Style.loadingWrapper}>< Loading/></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps,null)(quizContainer);