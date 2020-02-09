import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Item} from '../../typings/Item';
import {useStyles} from '../../../styles';

interface SpanningRows {
    total: number;
    salesTaxes: number;
}

interface Props {
    items: Item[];
    spanningRows?: SpanningRows;
}

function ccyFormat(num: number) {
    return num.toFixed(2);
}

export default function SpanningTable({items, spanningRows}: Props) {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label={'spanning table'}>
                <TableHead>
                    <TableRow>
                        <TableCell align={'left'}>{'Qty.'}</TableCell>
                        <TableCell>{'Item'}</TableCell>
                        <TableCell>{'Market'}</TableCell>
                        <TableCell>{'Type'}</TableCell>
                        <TableCell align={'right'}>{'Price'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell align={'left'}>{item.quantity}</TableCell>
                                    <TableCell>{item.item}</TableCell>
                                    <TableCell>{item.market.name}</TableCell>
                                    <TableCell>{item.type.name}</TableCell>
                                    <TableCell align={'right'}>{ccyFormat(item.price)}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                    {
                        spanningRows && (
                            <>
                                <TableRow>
                                    <TableCell rowSpan={2} />
                                    <TableCell colSpan={3}><b>{'Sales Taxes'}</b></TableCell>
                                    <TableCell align={'right'}><b>{ccyFormat(spanningRows.salesTaxes)}</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}><b>{'Total'}</b></TableCell>
                                    <TableCell align={'right'}><b>{ccyFormat(spanningRows.total)}</b></TableCell>
                                </TableRow>
                            </>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
