import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Film extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <p className="display-4">Le grand Bleu</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className="lead">
                  ontrairement à une opinion répandue, le Lorem Ipsum n'est pas
                  simplement du texte aléatoire. Il trouve ses racines dans une
                  oeuvre de la littérature latine classique datant de 45 av.
                  J.-C., le rendant vieux de 2000 ans. Un professeur du
                  Hampden-Sydney College, en Virginie, s'est intéressé à un des
                  mots latins les plus obscurs, consectetur, extrait d'un
                  passage du Lorem Ipsum, et en étudiant tous les usages de ce
                  mot dans la littérature classique, découvrit la source
                  incontestable du Lorem Ipsum.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <p className="display-4"> Le 5ème éléments</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p className="lead">
                  ontrairement à une opinion répandue, le Lorem Ipsum n'est pas
                  simplement du texte aléatoire. Il trouve ses racines dans une
                  oeuvre de la littérature latine classique datant de 45 av.
                  J.-C., le rendant vieux de 2000 ans. Un professeur du
                  Hampden-Sydney College, en Virginie, s'est intéressé à un des
                  mots latins les plus obscurs, consectetur, extrait d'un
                  passage du Lorem Ipsum, et en étudiant tous les usages de ce
                  mot dans la littérature classique, découvrit la source
                  incontestable du Lorem Ipsum.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <p className="display-4"> Taxi</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p className="lead">
                  ontrairement à une opinion répandue, le Lorem Ipsum n'est pas
                  simplement du texte aléatoire. Il trouve ses racines dans une
                  oeuvre de la littérature latine classique datant de 45 av.
                  J.-C., le rendant vieux de 2000 ans. Un professeur du
                  Hampden-Sydney College, en Virginie, s'est intéressé à un des
                  mots latins les plus obscurs, consectetur, extrait d'un
                  passage du Lorem Ipsum, et en étudiant tous les usages de ce
                  mot dans la littérature classique, découvrit la source
                  incontestable du Lorem Ipsum.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
