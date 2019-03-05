import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

//import { generateRows } from '../../../demo-data/generator';

const RowDetail = ({ row }) => (
  <ul style={{flexDirection: 'row', display: 'flex'}}>
    <li style={{flex: 1, listStyleType: 'none'}}>
      <p>מחיר מימוש</p>
      <span>{row.stam}</span>
    </li>
    <li style={{flex: 1, listStyleType: 'none'}}>
      <p>מחיר ממוצע 30 ימים</p>
      <span>2</span>
    </li>
    <li style={{flex: 1, listStyleType: 'none'}}>
      <p>חייב דיווח לבורסה</p>
      <span>4</span>
    </li>
  </ul>
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rtlEnabled: false,
      columns: [
        { name: 'a', title: 'סוג הוראה' },
        { name: 'b', title: 'שם מלא' },
        { name: 'c', title: 'שיטת מימוש' },
        { name: 'd', title: 'כמות מבוקשת למימוש' },
        { name: 'e', title: 'כמות מניות למכירה' },
        { name: 'f', title: 'תוקף ההוראה' },
        { name: 'g', title: 'מחיר מכירה מינימלי' },
        { name: 'h', title: 'מסלול מס' },
        { name: 'i', title: 'סיום תקופת חסימה 102' }
      ],
      rows: [
        {
          a:'מכירה', 
          b: 'ישראל ישראלי', 
          c: 'מימוש בנטו',
          d: '100.000',
          e: '1000',
          f: '12.12.2018',
          g: '$100.32',
          h: 'הוני 102',
          i: '01.07.2020',
          stam:'stam'
        },
        {
          a:'מכירה', 
          b: 'ישראל ישראלי', 
          c: 'מימוש בנטו',
          d: '100.000',
          e: '1000',
          f: '12.12.2018',
          g: '$100.32',
          h: 'הוני 102',
          i: '01.07.2020',
          stam: 'aadfsfsf'
        },
        {
          a:'מכירה', 
          b: 'ישראל ישראלי', 
          c: 'מימוש בנטו',
          d: '100.000',
          e: '1000',
          f: '12.12.2018',
          g: '$100.32',
          h: 'הוני 102',
          i: '01.07.2020',
          stam: 'dddadwed'
        }]
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
          rtlEnabled={true}
        >
          <RowDetailState/>
          <Table />
          <TableHeaderRow />
          <TableRowDetail
            contentComponent={RowDetail}
          />
        </Grid>
      </Paper>
    );
  }
}
