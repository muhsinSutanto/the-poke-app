import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Row, Skeleton, Typography, Avatar } from "antd";
import Layout from "../template/Layout";
import { Link } from "react-router-dom";
import { fetchPokemonList } from "../store/actions/pokeAction";
import { imageUrl } from "../helpers/utils";

const Home = () => {
   const { Text, Title } = Typography;
   const dispatch = useDispatch();
   const pokemonList = useSelector((state) => state.pokeList.pokemonList);

   useEffect(() => {
      dispatch(fetchPokemonList());
   }, []);

   return (
      <Layout>
         <Row align="middle">
            <Col>
               <Title className="pd-20" level={2}>
                  Pokemon List
               </Title>
            </Col>
         </Row>
         {!pokemonList.length ? (
            <Skeleton paragraph={{ rows: 10 }} />
         ) : (
            <Col span={24}>
               {pokemonList.map((pokemon, key) => {
                  return (
                     <Link to={`/pokemon/${pokemon.name}`}>
                        <Card key={key} hoverable="true">
                           <Row align="middle">
                              <Col xs={{ span: 5 }} lg={{ span: 1 }}>
                                 <Avatar
                                    style={{ backgroundColor: "#fde3cf" }}
                                    size={50}
                                    src={imageUrl(pokemon)}
                                 />
                              </Col>
                              <Col>
                                 <Text>{pokemon.name}</Text>
                              </Col>
                           </Row>
                        </Card>
                     </Link>
                  );
               })}
            </Col>
         )}
      </Layout>
   );
};

export default Home;
