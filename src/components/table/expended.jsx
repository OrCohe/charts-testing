import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
//import { styles } from './styles';
import { TableBody,TableRowColumn,TableRow, TableCell } from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class ExpandableTableRow extends React.Component {

    render() {
        const { classes, item } = this.props;
        console.log(item)
        const leads = [
            {
                brand: 'aaa',
                budget: 500,
                eventName: 'bbbb',
                firstName: 'ccc',
                lastName: 'ddd'
            },
            {
                brand: 'bbbb',
                budget: 5550,
                eventName: 'cccc',
                firstName: 'ccddddc',
                lastName: 'ddddddd'
            }
        ]
        return (
            <div>
            <TableBody displayRowCheckbox={false}>
                {leads.map((lead, i) => (
                    <TableRow key={i}>
                        <TableRowColumn>
                            <Card style={{ boxShadow: 'none' }}>
                                <CardHeader
                                    title={lead.brand}
                                    style={{ paddingLeft: 0, fontWeight: 600 }}
                                    actAsExpander={true}
                                />
                                <CardContent expandable={true}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardContent>
                            </Card>
                        </TableRowColumn>
                        <TableRowColumn style={{ verticalAlign: 'top', height: 'auto', paddingTop: '1.4em' }}>{lead.budget}</TableRowColumn>
                        <TableRowColumn style={{ verticalAlign: 'top', height: 'auto', paddingTop: '1.4em' }}>{lead.eventName ? 'Event' : 'Content'}</TableRowColumn>
                        <TableRowColumn style={{ verticalAlign: 'top', height: 'auto', paddingTop: '1.4em' }}>{lead.firstName + ' ' + lead.lastName}</TableRowColumn>
                        <TableRowColumn style={{ verticalAlign: 'top', height: 'auto', paddingTop: '1.4em' }}>Archive | Start Campaign</TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
            </div>
        );
    }
}


export default ExpandableTableRow;