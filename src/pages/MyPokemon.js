import React, { useEffect } from "react";
import Layout from "../template/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyPokemon, removePokemon } from "../store/actions/pokeAction";
import { Button, Card, Col, Row, Skeleton, Typography, Avatar } from "antd";

const MyPokemon = () => {
   const { Text, Title } = Typography;

   const dispatch = useDispatch();
   const myPokemons = useSelector((state) => state.pokeList.myPokemons);

   useEffect(() => {
      dispatch(fetchMyPokemon());
   }, []);

   const handleRelease = (param) => {
      dispatch(removePokemon(param));
   };

   const render = () => {
      if (myPokemons == null) {
         return <Skeleton paragraph={{ rows: 10 }} />;
      }
      if (!myPokemons.length) {
         return (
            <Title level={2} className="pd-20">
               Sorry...... You haven't caught any pokemon
            </Title>
         );
      } else {
         return (
            <React.Fragment>
               <Title className="pd-20" level={2}>
                  My Pokemons' Cage
               </Title>
               {myPokemons.map((pokemon, key) => (
                  <Card key={key}>
                     <Row align="middle">
                        <Col xs={{ span: 5 }} lg={{ span: 1 }}>
                           <Avatar
                              style={{ backgroundColor: "#fde3cf" }}
                              size={50}
                              src={pokemon.image}
                           />
                        </Col>
                        <Col xs={{ span: 5 }} lg={{ span: 1 }}>
                           <Text>{pokemon.newName}</Text>
                        </Col>
                        <Col>
                           <Button type="primary" onClick={() => handleRelease(key)}>
                              Release
                           </Button>
                        </Col>
                     </Row>
                  </Card>
               ))}
            </React.Fragment>
         );
      }
   };

   return <Layout>{render()}</Layout>;
};

export default MyPokemon;
