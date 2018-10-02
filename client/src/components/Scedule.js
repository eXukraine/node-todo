import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Scedule extends Component{
    render() {
        return (
            <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Monday</th>
                <th>Wednesday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                    <select>
                        <option>Пресс</option>
                        <option>Гиперэкстензия</option>
                    </select>
                </td>
                <td>Пресс</td>
                <td>Пресс</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Гиперэкстензия</td>
                <td>Гиперэкстензия</td>
                <td>Гиперэкстензия</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Жим ногами</td>
                <td>Тяга за голову</td>
                <td>Тяга гантелей на бицепс</td>
              </tr>
            </tbody>
          </Table>
        )
    }
}

export default Scedule;