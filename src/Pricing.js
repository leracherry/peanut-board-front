import React from 'react';
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import Button from "@material-ui/core/Button";
import GooglePayButton from "@google-pay/button-react";
import './App.css';

export function CardDisplay() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
            <MDBCol>
                <MDBCard className='h-100' alignment='center'>
                    <MDBCardImage
                        src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle >Basic</MDBCardTitle>
                        <MDBCardText >
                            For individuals or teams just getting started with project management.
                        </MDBCardText>
                        <MDBCardTitle>Free</MDBCardTitle>
                        <Button href='/Step1' alignment='center' variant="contained" size="small" color="primary">Get Started</Button>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'alignment='center'>
                    <MDBCardImage
                        src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle align="middle">Premium</MDBCardTitle>
                        <MDBCardText align="middle">For teams that need to create project plans with confidence.</MDBCardText>
                        <MDBCardTitle align="middle">$10,99</MDBCardTitle>
                        <Button href='#' alignment='center' variant="contained" size="small" color="primary">Get Started</Button>
                        <GooglePayButton className="GooglePay"
                                         buttonLocale="en"
                                         buttonColor="white"
                                         environment="TEST"
                                         paymentRequest={{
                                             apiVersion: 2,
                                             apiVersionMinor: 0,
                                             allowedPaymentMethods: [
                                                 {
                                                     type: 'CARD',
                                                     parameters: {
                                                         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                         allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                     },
                                                     tokenizationSpecification: {
                                                         type: 'PAYMENT_GATEWAY',
                                                         parameters: {
                                                             gateway: 'example',
                                                         },
                                                     },
                                                 },
                                             ],
                                             merchantInfo: {
                                                 merchantId: '12345678901234567890',
                                                 merchantName: 'Demo Merchant',
                                             },
                                             transactionInfo: {
                                                 totalPriceStatus: 'FINAL',
                                                 totalPriceLabel: 'Total',
                                                 totalPrice: '100.00',
                                                 currencyCode: 'USD',
                                                 countryCode: 'US',
                                             },
                                         }}
                                         onLoadPaymentData={paymentRequest => {
                                             console.log('load payment data', paymentRequest);
                                         }}
                        />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100' alignment='center'>
                    <MDBCardImage
                        src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle align="middle">Business</MDBCardTitle>
                        <MDBCardText align="middle">
                            For teams and companies that need to manage work across initiatives.
                        </MDBCardText>
                        <MDBCardTitle align="middle">$24,99</MDBCardTitle>
                        <Button href='#' alignment='center' variant="contained" size="small" color="primary">Get Started</Button>
                        <GooglePayButton className="GooglePay"
                            buttonLocale="en"
                            buttonColor="white"
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '12345678901234567890',
                                    merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '100.00',
                                    currencyCode: 'USD',
                                    countryCode: 'US',
                                },
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('load payment data', paymentRequest);
                            }}
                        />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>
    );
}