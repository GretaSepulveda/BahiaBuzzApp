import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import '../App.css'

export default class AboutPage extends Component {


    render() {
        return (
            <div className="login-page">
                <Container >
                    {/* <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1> */}
                    <p>
                   Stay tuned for more sweet updates to come. :D
                        
                    </p>
              
                </Container>
            </div>
        )
        }
    }