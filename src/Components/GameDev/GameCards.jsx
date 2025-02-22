import React from 'react';
import {Col, Row} from "react-bootstrap";

import tpp_adventure from '../../Images/Game/game images 2.jpg'
import platformer from '../../Images/Game/game images.jpg'
import top_down_2d from '../../Images/Game/game images 3.jpg'
import paimon from '../../Images/Game/CardThumbs/paimon.png'
const GameCards = () => {
    return (
        <div>
            <Row>
                <Col className={'mt-3 m-2'}>
                    <div className="card">
                        <img className="card-img-top" src={tpp_adventure} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">TPP Adventure</h5>
                            <p className="card-text">Third person 3D game that player can explore the area and find all
                                collectibles including all hidden ones
                            </p>
                            <a href="https://play.unity.com/en/games/1313d877-8f8c-4d89-bd86-53dc2754a2a4/cheese-coins-unity-essentials"
                               className="btn btn-info">Play</a>
                        </div>
                    </div>
                </Col>
                <Col className={'mt-3 m-2'}>
                    <div className="card">
                        <img className="card-img-top" src={platformer} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">2D Platformer</h5>
                            <p className="card-text">2D game that player need to collect all collectibles and escape
                                from the
                                enemies or defeat them and avoid obstacles until reach end.
                            </p>
                            <a href="https://play.unity.com/en/games/eb4e1307-9ef9-496f-9cf8-f7457118c6c3/stick-man-webgl-builds"
                               className="btn btn-info">Play</a>
                        </div>
                    </div>
                </Col>
                <Col className={'mt-3 m-2'}>
                    <div className="card">
                        <img className="card-img-top" src={top_down_2d} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Top Down 2D</h5>
                            <p className="card-text">Top Down 2D Game that player need to explore the area without get
                                stuck
                                by obstacles and collect all collectibles.
                            </p>
                            <a href="https://play.unity.com/en/games/1313d877-8f8c-4d89-bd86-53dc2754a2a4/cheese-coins-unity-essentials"
                               className="btn btn-info">Play</a>
                        </div>
                    </div>
                </Col>
                <Col className={'mt-3 m-2'}>
                    <div className="card">
                        <img className="card-img-top" src={paimon} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">2D JS Browser Game</h5>
                            <p className="card-text"> Player need to collect innocent souls to score up and
                                avoid monsters
                            </p>
                            <a href="https://soul-saver-7e285.web.app/"
                               className="btn btn-info">Play</a>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    );
};

export default GameCards;
