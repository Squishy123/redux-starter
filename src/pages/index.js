import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import { connect } from 'react-redux';

import { changeBG } from '../state/actions';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

const IndexPage = ({ changeBG }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <h1>Redux Starter</h1>
                <button onClick={() => changeBG('cornflowerblue')}>blue</button>
                <button onClick={() => changeBG('white')}>white</button>
            </div>
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);
