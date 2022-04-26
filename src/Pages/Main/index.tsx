import React from 'react';
import {Wrapper, Description} from '../../styles'
import {Legend, Photo} from './styles'
import Articles from './articles'

function Main() {
    return (
        <Wrapper>
            <Legend>
                <div>
                    Hi there! I'm Suntsev Sergey from Russia's Ural. <br/>
                    I'm a programmer. Make yourself at home!
                </div>
                <Photo/>
            </Legend>
            <Description>
                I specialize in quality web development.
                I show my journey on Instagram and commit code to Github.
            </Description>
            <Articles/>
        </Wrapper>
    )
}

export default Main;
