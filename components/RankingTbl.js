import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Table, Row, Rows, Col, TableWrapper} from 'react-native-table-component';

export default class RankingTbl extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          tableHead: ['#', 'Team', 'PTS', 'GD', 'P'],
          greenCell: [
              ['1'],
              ['2'],
              ['3'],
          ],
          greenCellData: [
            ['Barcelona', '27', '16', '10'],
            ['Real Madrid', '24', '9', '10'],
            ['Atc Madrid', '21', '4', '10'],
          ],
          cell: [
            ['4'],
            ['5'],
            ['6'],
            ['7'],
            ['8'],
            ['9'],
            ['10'],
            ['11'],
            ['12'],
            ['13'],
            ['14'],
            ['15'],
            ['16'],
            ['17']
          ],
          tableData: [
            ['Sevilla', '19', '12', '10'],
            ['Levante', '18', '33', '10'],
            ['Valencia', '18', '30', '10'],
            ['Atc Bilbao', '15', '30', '10'],
            ['Real Sociedad', '14', '16', '10'],
            ['Granada', '14', '16', '10'],
            ['Villareal', '13', '16', '10'],
            ['Espanyol', '12', '15', '10'],
            ['Deportivo', '12', '12', '10'],
            ['Real Betis', '12', '10', '10'],
            ['Osasuna', '10', '16', '10'],
            ['Alaves', '10', '16', '10'],
            ['Osasuna', '5', '16', '10'],
            ['RCD Mallorca', '3', '16', '10'],
          ],
          redCell: [
            ['18'],
            ['19'],
            ['20'],
          ],

          redCellData: [
            ['Celta Vigo', '3', '16', '10'],
            ['Leganes', '2', '16', '10'],
            ['Eibar', '0', '16', '10'],
          ]
        }
      }
    render(){
        return(
            <ScrollView style={styles.container}>
                <Table style={styles.table}>
                    <Row data={this.state.tableHead} flexArr={[1, 8, 1, 1, 1]} style={styles.tableHead}></Row>
                    <TableWrapper style={styles.rowWrapp}>
                        <Rows data={this.state.greenCell} flexArr={[1]} style={styles.greenCells} textStyle={styles.text}></Rows>
                        <Rows data={this.state.greenCellData} flexArr={[8, 1, 1, 1]} style={styles.rows}></Rows>
                    </TableWrapper>
                    <TableWrapper style={styles.rowWrapp}>
                        <Rows data={this.state.cell} flexArr={[1]} style={styles.col} textStyle={styles.text}></Rows>
                        <Rows data={this.state.tableData} flexArr={[8, 1, 1, 1]} style={styles.rows}></Rows>
                    </TableWrapper>
                    <TableWrapper style={styles.rowWrapp}>
                        <Rows data={this.state.redCell} flexArr={[1]} style={styles.redCells} textStyle={styles.text}></Rows>
                        <Rows data={this.state.redCellData} flexArr={[8, 1, 1, 1]} style={styles.rows}></Rows>
                    </TableWrapper>
                </Table>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    tableHead: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },

    rowWrapp: {
        flexDirection: 'row',
    },

    text: {
        textAlign: 'center',
    },

    col: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },

    rows: {
        paddingLeft: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },

    greenCells: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderLeftColor: 'green',
        borderLeftWidth: 5,
    },

    redCells: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderLeftColor: 'red',
        borderLeftWidth: 5,
    }
})