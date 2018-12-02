import React from 'react';
import {shallow} from 'enzyme';

import {CompanyProfile} from '../../../components/containers/view/companyProfile';

describe('<CompanyProfile />', () => {
    const summaryData = [
        {
            label: 'Authorized Shares',
            data: '10,000,000'
        },
        {
            label: 'Issued Shares',
            data: '850,000'
        },
        {
            label: 'Reserved Shares',
            data: '100,000'
        }
    ];

    const stockTypes = [
        {
            classSlug: 'classA',
            className: 'Class A',
            currentlyOffered: true,
            classData: [
                {
                    dataSlug: 'authedShares',
                    dataName: 'Authorized Shares',
                    data: '9,000,000',
                    editable: true
                },
                {
                    dataSlug: 'issuedShares',
                    dataName: 'Issued Shares',
                    data: '550,000',
                    editable: false
                },
                {
                    dataSlug: 'reservedShares',
                    dataName: 'Reserved Shares',
                    data: '100,000',
                    editable: true
                },
                {
                    dataSlug: 'currentlyOffered',
                    dataName: 'Currently Offered',
                    data: 'Yes',
                    editable: true
                },
                {
                    dataSlug: 'currentPrice',
                    dataName: 'Current Price per Share',
                    data: '$4.00',
                    editable: true
                },
                {
                    dataSlug: 'requestsPending',
                    dataName: 'Requests Pending',
                    data: 'Yes',
                    editable: false,
                    href: '#'
                }
            ]
        },
        {
            classSlug: 'preferred',
            className: 'Preferred',
            currentlyOffered: false,
            classData: [
                {
                    dataSlug: 'authedShares',
                    dataName: 'Authorized Shares',
                    data: '1,000,000',
                    editable: true
                },
                {
                    dataSlug: 'issuedShares',
                    dataName: 'Issued Shares',
                    data: '300,000',
                    editable: false
                },
                {
                    dataSlug: 'reservedShares',
                    dataName: 'Reserved Shares',
                    data: '0',
                    editable: true
                },
                {
                    dataSlug: 'currentlyOffered',
                    dataName: 'Currently Offered',
                    data: 'No',
                    editable: true
                },
                {
                    dataSlug: 'currentPrice',
                    dataName: 'Current Price per Share',
                    data: '0',
                    editable: true
                },
                {
                    dataSlug: 'requestsPending',
                    dataName: 'Requests Pending',
                    data: 'No',
                    editable: false
                }
            ]
        },
    ];

    it('Renders without crashing.', () => {
        shallow(<CompanyProfile summaryData={summaryData} stockTypes={stockTypes} />);
    });
});
