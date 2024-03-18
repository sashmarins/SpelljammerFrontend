import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import "./combattest.css"


const initialCombatants = [
    {
      name: "odin",
      race: "astral elf",
      hitpoints: 20,
      strength: 11,
      image: "/astralelf.png",
    },
    {
      name: "maximus",
      race: "autognome",
      hitpoints: 17,
      strength: 10,
      image: "/autognome.jpg",
    },
  ];
  
  export default function CombatantTest() {
    const [combatants, setCombatants] = useState(initialCombatants);
  
    const handleAttack = (attackedName) => {
        setCombatants((prevCombatants) =>
          prevCombatants.map((combatant) => {
            if (combatant.name === attackedName) {
              const attacker = prevCombatants.find((c) => c.name !== attackedName);
              const newHitpoints = Math.max(0, combatant.hitpoints - attacker.strength);
              return { ...combatant, hitpoints: newHitpoints };
            }
            return combatant;
          })
        );
      };
  
    const Combatant = ({ name, race, hitpoints, strength, image }) => {
      return (
        <div className="CombatantCard">
          <Card style={{ width: "18rem", borderRadius: "25px" }}>
            <Card.Img
              style={{ height: "250px", objectFit: "cover" }}
              variant="top"
              src={image}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{race}</Card.Subtitle>
              <ListGroup variant="flush">
                <ListGroup.Item>Hit points: {hitpoints}</ListGroup.Item>
                <ListGroup.Item>Strength: {strength}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary" onClick={() => handleAttack(name)}>
                Attack
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    };
  
    return (
      <div className="CombatantDisplay" style={{ margin: "10px", padding: "20px" }}>
        {combatants.map((combatant) => (
          <Combatant key={combatant.name} {...combatant} />
        ))}
      </div>
    );
  }
  