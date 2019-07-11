import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styles from './homecontainer.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//components//

import List from '../../widgets/list/list';




class homecontainer extends Component {
  

    render() {
    const Result = this.props.questionWithResponse;
    console.log(this.props)
        return (
            
            <React.Fragment>
            <CssBaseline />
            <Container >
              <Typography className={styles.parentDivHome} component="div" style={{ backgroundColor: '#cfe8fc', height: '100%' ,minHeight:'100vh'}} >
               {Result ?
             <div>< List Result = {Result} /></div>
            :<Typography component="div" className={styles.parentDivWelcome}>Welcome to a Simple Quiz App</Typography>}
               <Link to='/quiz'>
                 <Button variant="contained" color="primary" >
                    Play Quiz
                 </Button>
               </Link>
               <Typography component="div">Click the Button to Test Your Knowledge </Typography>
              
              </Typography>
            </Container>
          </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questionWithResponse: state.questions.questionWithResponse
    }
}

export default connect(mapStateToProps)(homecontainer);