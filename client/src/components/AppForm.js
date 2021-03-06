import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className = "form">
            <Form action = "/works" method = "Post">
                <FormGroup>
                <Label for="exercise">Exercise</Label>
                <Input type="text" name="exercise_name" id="exercise" placeholder="Exercise" />
                </FormGroup>
                <FormGroup>
                <Label for="Weight">Weight</Label>
                <Input type="number" name="weight" id="Weight" step = "5" min = "0" placeholder="Weight" />
                </FormGroup>
                <FormGroup>
                <Label for="qty">Qty</Label>
                <Input type="number" name="qty" id="qty" min = "0" placeholder = "Qty" />
                </FormGroup>


                <Button type = "submit">Submit</Button>
            </Form>
        </div>
    );
  }
}