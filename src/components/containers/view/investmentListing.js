import React from 'react';
import {connect} from 'react-redux';

import InvestmentListingRow from '../../display/investmentListingRow';

import '../../../css/components/containers/view/investmentListing.scss';

export class InvestmentListing extends React.Component {
    mapClassSlugToName() {
        let classes = {};
        this.props.stockTypes.forEach(element => {
            classes[element.classSlug] = element.className;
        });
        return(classes);
    }
    render() {
        const stockTypes = this.mapClassSlugToName();
        const rows = this.props.certificates.map((cert, i) => {
            cert.shareClass = stockTypes[cert.shareClassSlug];
            return (<InvestmentListingRow key={i} data={cert} />);
        });

        return (
            <table className="investment-listing-table">
                <thead>
                    <tr className="investment-listing-header-row">
                        <th className="investment-listing-column-heading">Certificate</th>
                        <th className="investment-listing-column-heading">Shareholder</th>
                        <th className="investment-listing-column-heading">Number of Shares</th>
                        <th className="investment-listing-column-heading">Purchase Date</th>
                        <th className="investment-listing-column-heading">Stock Class</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    certificates: state.investmentData.issued,
    stockTypes: state.companyData.shareClasses
});

export default connect(mapStateToProps)(InvestmentListing);