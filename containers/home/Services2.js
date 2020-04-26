import React, { Component } from 'react';

// Components
import ArrowButton from '../../components/ArrowButton';
import ServiceType from './Services2Components/ServicesType';

export default class Services2 extends Component {

    state = {
        activeDot: 1,
    }

    componentDidMount() {
        this.onTimedSwitch();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
}

    onActivateDot = (number) => {
        this.setState({
            ...this.state,
            activeDot: number,
            timerSet: false,
        })
    }

    onArrowClick = (direction) => {
        if (direction === 'right') {
            if (this.state.activeDot == 3) {
                this.setState({
                    ...this.state,
                    activeDot: 1,
                })
            } else {
                this.setState({
                    ...this.state,
                    activeDot: this.state.activeDot + 1,
                })
            }
        } else if (direction === 'left') {
            if (this.state.activeDot == 1) {
                this.setState({
                    ...this.state,
                    activeDot: 3,
                })
            } else {
                this.setState({
                    ...this.state,
                    activeDot: this.state.activeDot - 1,
                })
            }
        }
    }

    onTimedSwitch() {
        this.carouselInterval = setInterval(() => {
            this.onArrowClick('right');
        }, 5000);
    }

    render() {
        return (
            <section className="container" id="services2">
            <p className="p-m" id="services2__subtitle">Our Services</p>
            <div className="line" id="services2__line" />
            <h2 className="h2" id="services2__header">Home Care</h2>
            <p className="p-m" id="services2__paragraph">Abraham Home Care offers a variety of different services aimed at meeting the needs of clients of all ages.</p>

            <div id="services2__left" onClick={this.onArrowClick.bind(this, 'left')}>
                <ArrowButton />
            </div>

            <div id="services2__right" onClick={this.onArrowClick.bind(this, 'right')}>
                <ArrowButton />
            </div>

            <div id="services2__dot-container">
                <div id={this.state.activeDot == 1 ? 'services2__dot--active' : 'services2__dot'} onClick={this.onActivateDot.bind(this, 1)} />
                <div id={this.state.activeDot == 2 ? 'services2__dot--active' : 'services2__dot'} onClick={this.onActivateDot.bind(this, 2)} />
                <div id={this.state.activeDot == 3 ? 'services2__dot--active' : 'services2__dot'} onClick={this.onActivateDot.bind(this, 3)} />
            </div>

            <ServiceType
                dynamicClass={this.state.activeDot == 1 ? 'fadeIn' : 'fadeOut'}
                color={'blue'}
                photo={'url(/new-photo-3.png)'}
                subheading={'Personal Assistance'}
                paragraph={'Standby Assistance with Morning and Evening Routines, Transfer Assistance, Bathing & Showering Assistance, Personal Hygiene Assistance, Help with Restroom Use, Assistance with Dressing, and Personal Appearance Care.'}
            />
            <ServiceType
                dynamicClass={this.state.activeDot == 2 ? 'fadeIn' : 'fadeOut'}
                color={'green'}
                photo={'url(/home-care-photo-3.jpg)'}
                subheading={'Specialized Care'}
                paragraph={'Autism, Cerebral Palsy, MS, Quadraplegic Care, and Spinal Cord Injury Care'}
            />
            <ServiceType
                dynamicClass={this.state.activeDot == 3 ? 'fadeIn' : 'fadeOut'}
                color={'blue'}
                photo={'url(/home-care-photo-1.jpg)'}
                subheading={'Companionship'}
                paragraph={'Friendly & Supportive, Conversation, Plan & Encourage Social Activities, Encourage Light Exercise, and Encourage Active Thinking'}
            />
        </section>
        )
    }
}
