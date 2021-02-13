import React from 'react';
import { Banner } from '../../components/organisms/Banner';
import { Card } from "../../components/atoms/Card/index";
import TabsView from '../../components/organisms/tabs';
import "./styles.css";

const Home = (props) => {
    return (
        <div>
            <Banner />
            <TabsView />
        </div>
    );
};

export default Home;