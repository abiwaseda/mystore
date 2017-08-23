/**
 * Imports
 */
import React from 'react';

// Required components
import Heading from '../../common/typography/Heading';

/**
 * Component
 */
class InfoPage extends React.Component {

    //*** Page Title and Snippets ***//

    static pageTitleAndSnippets = function (context, params, query) {
        return {
            title: 'Informações'
        }
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./InfoPage.scss');
    }

    //*** Template ***//

    render() {
        return (
            <div className="info-page">
                <div className="info-page__title">
                    <Heading size="large">
                        Information
                    </Heading>
                </div>
                <div className="info-page__content">
                    <div className="info-page__block">
                        <Heading size="medium">
                            Client Support
                        </Heading>
                        <div className="info-page__support">
                            <p>
                                Please contact us at our office or through our email at <a href="mailto:support@yamacity.com">support@yamacity.com</a><br />
                            </p>
                        </div>
                    </div>
                    <div className="info-page__block">
                        <Heading size="medium">
                            Terms and Condition
                        </Heading>
                        <div className="info-page__terms-and-conditions">
                            
                            <strong>YAMACITY INC. NOTICES, TERMS AND CONDITIONS</strong>
                            <p>We are Yamacity Travel Inc. and we look forward to the opportunity to act as your booking agent for your travel needs. These terms and conditions (the "Agreement") describe what you are legally entitled to expect from us when you purchase travel related services through us, in addition to your obligations as a customer. The terms "we", "us" and "our" refer to Yamacity Travel Inc. The term "you" refers to the customer visiting our website, booking a reservation through us or otherwise using our services </p>
                            <p><strong>1. Our Agreement With You</strong></p>
                            <p><strong>Products and Suppliers</strong></p>
                            <p>We sell a variety of travel related products from different suppliers and service providers ("Suppliers"). Each Supplier has its own terms and condition that are applicable to your particular arrangements in addition to our general terms and conditions, and you should make sure you understand them. Certain software and content found on our website are owned or licensed by us or our Suppliers, your use of which may be subject to further conditions. Our website, which is referred throughout this Agreement, can be found at <a href="http://www.yamacitytravel.com">www.yamacitytravel.com</a>.</p>
                            <p>Yamacity Travel is acting as intermediary or a "Booking Agent" for products and services that are not directly supplied by us (e.g., air carriage and ground transportation, hotel accommodations, meals, tours, cruises, etc.). We are not a co-vendor of such products and services. You will be entering into a separate contract with such Suppliers in connection with such products and services. </p>
                            <p>All airlines tickets are subject to supplemental price increases that may be imposed after the date of purchase. Post-purchase price increases may be applied due to additional costs imposed by a supplier or government. You may be charged additional sums by Yamacity Travel to offset increased fees, fuel surcharges, taxes, and fluctuations in foreign exchange markets or any combination thereof. Acceptance of these terms and conditions hereby consent you to any post-purchase price increases and authorize Yamacity Travel to charge my credit card for such additional amounts.</p>
                            <p><strong>Deposits and Payment</strong></p>
                            <p>Any deposits from you are non-refundable. Payment of a deposit enables us to hold a reservation for you but does not guarantee the price. The price can only be guaranteed once we receive full payment and other travel documents have been issued, subject to any terms and conditions of the Supplier. We will advise you of the date that full payment is required. Upon your provision of your payment information, you are authorizing us to make the payment arrangements with the corresponding Suppliers.</p>
                            <p>We reserve the right to refuse personal checks as a method of payment. After full payment, the conditions of the contract with your Supplier may permit them to increase the cost of your arrangements. If we are acting as your Booking Agent, we will pass on any such increase to you as we become aware of such increase. If we have arranged a package, changes in transportation costs including the cost of fuel, taxes, fees and exchange rates mean that the price of your travel arrangements may change after you have paid in full. </p>
                            <p><strong>Documentation</strong></p>
                            <p>Our general practice is to send documents to our customers electronically whenever possible. We reserve the right to charge an administration fee should you make a request for such documents to be sent as a hard copy. </p>
                            <p><strong>Cancellations and Changes</strong></p>
                            <p>Your contract with your Suppliers may allow them to cancel or amend bookings. If we are your Booking Agent, we will ensure that you are promptly notified of any significant changes once we become aware of such change if there is time before your departure, but we accept no liability for any changes or costs incurred that may result. Subject to the Supplier’s terms and conditions, you will then have the choice of accepting the change of arrangements, accepting an offer of alternative travel arrangements if one is made available by the Supplier, or canceling your booked arrangements and receiving any applicable refunds. We do not guaranty that any refunds will apply.</p>
                            <p>If you have booked a flight and we are alerted to a significant schedule change by your airline before you leave the United States, we will contact you by email to advise you of this. Please ensure that you have given your contact email address to us and that you regularly check for messages before you leave. We have no control over airline schedule changes and accept no liability for costs which may arise as a result of such changes.</p>
                            <p>After you have left the US, it is your responsibility to check with the airline that any onward flights you have confirmed are operating as booked. We strongly recommend that you contact your airline at least 72 hours before the scheduled departure of each flight to do this. Please note that for some airlines it is mandatory to confirm with them your intention to fly.</p>
                            <p><strong>Right of California Customer to Make Claim on the California Travel Consumer Restitution Fund</strong></p>
                            <p>You may be eligible for a refund for losses to a registered seller of travel that participates in the California state refund program. If you were located in California at the time of your purchase, you may have a right to file a claim for loses with the California Travel Consumer Restitution Corporation. Certain restrictions apply. For a claim form and additional information, write to:</p>
                            <p><strong>Travel Consumer Restitution Corporation</strong><br/ >P.O. Box 8474<br/ >Northridge, CA 91327</p>
                            <p><strong>2. Your Agreement With Us</strong></p>
                            <p><strong>Your Acceptance of these Terms and Conditions</strong></p>
                            <p>By booking your arrangement with us or using our website, you are agreeing to be bound by the terms of this Agreement, including Parts 1-3 of this Agreement and any additional terms and conditions of any Supplier that are applicable to your booking, travel arrangements or use of any website content. You agree on behalf of yourself and those you represent to comply with all such terms and conditions, including the payment of all amounts when due. You agree that any violation of any such terms and conditions may result in (a) the cancellation of your reservation or purchase, (b) your forfeiture of any monies paid for your reservation or purchase, (c) you being denied access to the applicable travel related product or service, and (d) our right to debit your account for any costs we incur as a result of such violation.</p>
                            <p>You represent and warrant that (a) you are of sufficient age to use our services and website and can create binding legal obligations in connection with your use, (b) you are legally authorized to act on behalf of those you represent and accept these terms and conditions on their behalf, and (c) the information supplied by you or members of your group is true and correct. You are responsible for informing such other persons of all terms and conditions applicable to their travel arrangements. You understand that you are financially responsible for any use of our services or website by you and those using your name or account. </p>
                            <p><strong>If You Change Your Booking</strong></p>
                            <p>Where a change requested by you to your travel arrangements is permitted and possible, our standard service fees will apply in addition to any additional Supplier charges. Please contact your original booking agent to enquire about changes or review the ‘Travel Help’ section of <a href="http://www.yamacitytravel.com">www.yamacitytravel.com</a> for details of how to request changes. Please note that all reservation changes are subject to availability and the terms and conditions of the product purchased.</p>
                            <p>Changes to name details are not allowed by many airlines and other Suppliers. While we will endeavor make such a change if necessary, please bear in mind that most airlines and Suppliers treat a name change as a cancellation, to which standard conditions and charges would apply. </p>
                            <p>Flights must be taken in the sequence they appear on your ticket or eticket confirmation. If you plan not to take a flight as booked, please contact the airline as far in advance as possible to discuss your options. If you do not check in on time for a confirmed reservation, the airline may register you as a ‘no-show’, which could result in extra charges and/or your whole flight itinerary being cancelled and/or render your ticket void. </p>
                            <p><strong>If You Cancel Your Booking</strong></p>
                            <p>If you cancel your arrangements, you may be entitled to a partial refund. In addition to the cancellation terms and conditions of your Supplier(s), our standard fees will apply as may be outlined on your receipt or booking confirmation. We need to receive from you your original voucher before any applicable refund can be considered. If you decide to cancel arrangements before the balance due date, any deposits paid are non-refundable.</p>
                            <p>Refunds will only be paid to you once we have received the funds back from the Supplier(s). Generally flight tickets cannot be refunded if they are partially used. We are not responsible for a Supplier’s failure to pay a refund.</p>
                            <p>If the reason for your cancellation is covered under the terms of your travel insurance policy, you may be able to reclaim your cancellation charges through your insurer.</p>
                            <p><strong>Important Notice Regarding Airline Reservations</strong></p>
                            <p>If you arrive at an airline ticket or passenger check-in counter with your confirmed ticket and find that the airline shows no reservation for you – do not leave the counter. Check your ticket. If the status box shows "OK" for the flight in question, the airline policies typically require them to accommodate you on that flight, or if that is not possible, they must either find you a substitute flight or pay you denied boarding compensation. If necessary ask to speak to a supervisor.</p>
                            <p><strong>If You Have A Complaint</strong></p>
                            <p>If you have a problem during your holiday, please inform the relevant Supplier (e.g. your hotel) immediately. Should they be unable to resolve the matter, please immediately contact us in the United States, either through the office where you made your arrangements, or through <a href="http://www.yamacitytravel.com">www.yamacitytravel.com</a>. If you fail to timely contact us, we will not be permitted the opportunity to investigate your complaint and attempt to rectify any error while you are away, and this may affect your rights under this Agreement. We are a member of the Better Business Bureau. </p>
                            <p><strong>Travel Documents and Destinations</strong> </p>
                            <p>It is your responsibility to ensure that all of the details on your travel documents are correct and to bring to our attention any errors or discrepancies immediately. Your travel documents are valuable and should be safeguarded as if they were cash. It is not always possible to replace travel documents in the case of loss, theft, damage, etc.</p>
                            <p>Prior to booking international travel, we recommend that you review any U.S. Government’s prohibitions, warnings and advisories applicable to your destinations. By offering travel to any particular destination, we do not represent that travel in such destination is safe or without risk.</p>
                            <p>You further agree that in connection with your activities, you will not permit the use of our services or website by anyone that resides or is staying in a country for which such use is prohibited under U.S. regulations.</p>
                            <p><strong>Passport, Visa and Immigration Requirements</strong></p>
                            <p>It is your responsibility to fullfil the passport, visa and other immigration requirements applicable to your itinerary. You should confirm these with the relevant embassies and/or consulates. We do not accept any responsibility in the case of you being unable to travel due to not complying with any such requirements.</p>
                            <p>You are also required to carry a valid International Student I.D., and International Youth I.D. or an International Teacher I.D. card if you are traveling on a special student/youth/teacher ticket. It is your responsibility to verify this with our travel expert who is assisting you. </p>
                            <p><strong>Insurance</strong></p>
                            <p>Travel insurance is a vital part of your arrangements. We strongly recommend that you have taken out adequate insurance for the duration of your journey. Travel insurance is a mandatory element of some travel arrangements. We may be able to arrange travel insurance to be provided to you, furnish you a quote, and answer any queries you may have regarding the insurance. </p>
                            <p><strong>Travel Advice and Vaccinations</strong></p>
                            <p>U.S. Citizens should refer to the travel advice posted by the U.S. Department of State at travel.state.gov for all the countries you intend to visit. Vaccinations may be required for some or all of the places you are intending to visit. It is your responsibility to ensure that you have arranged all necessary vaccinations for your itinerary. </p>
                            <p><strong>Airline use of Insecticide Spray</strong></p>
                            <p>Some countries require insecticide spraying of aircraft prior to a flight or while you are on the aircraft.&nbsp; Federal law requires that we refer you to the Department of Transportation’s Disinsection Information page on their website at the time of booking for further information.&nbsp; <a href="http://airconsumer.dot.gov/spray.htm">http://airconsumer.dot.gov/spray.htm</a>. <br/ ><br/ ><strong>Hazardous Materials Disclosure</strong></p>
                            
                            <p>Federal law forbids the carriage of hazardous materials aboard aircraft in your luggage or on your person. A violation can result in five years' imprisonment and penalties of $250,000 or more (49 U.S.C. 5124). Hazardous materials include explosives, compressed gases, flammable liquids and solids, oxidizers, poisons, corrosives and radioactive materials. Examples: paints, lighter fluid, fireworks, tear gases, oxygen bottles and radio-pharmaceuticals. <br/ ><br/ >There are special exceptions for small quantities (up to 70 ounces total) of medicinal and toilet articles carried in your luggage and certain smoking materials carried on your person. For further information review the information found at <a href="http://www.tsa.gov/traveler-information/prohibited-items" target="_blank">TSA’s prohibited items webpage</a>&nbsp;at <a href="http://www.tsa.gov/traveler-information/prohibited-items">http://www.tsa.gov/traveler-information/prohibited-items</a>.</p>
                            
                            <p><strong>Use of our Services and Website</strong></p>
                            <p>You agree you will only use our website or services to make legitimate reservations or purchases and shall not make speculative, false or fraudulent reservations or reservations in anticipation of demand. You will only use our website and services in compliance with applicable law.</p>
                            <p>Without our prior written permission, you may not (a) access, monitor or copy any content or information on our website using any "robot", "spider" or other automated or manual device or program, (b) deep link to any portion of our website, or (c) "frame" or incorporate any portion of our website into any other website. </p>
                            <p>Our website may contain links to third party websites that we provide only as a convenience to you. You should take precautions to ensure that whatever links you access are free of viruses, worms, trojan horses or other destructive mechanisms The existence of these links does not imply that we endorse such websites or any included content. We are not responsible for such websites or content or any data privacy practices of such websites. </p>
                            <p><strong>Indemnification</strong> </p>
                            <p>You agree to indemnify us and our affiliates, and any of our Suppliers, and any such parties’ officers, directors, employees and agents from and against any claims, causes of action, demands, losses, damages, or other costs, (including reasonable legal and accounting fees) brought by you or third parties as a result of (a) your breach of this Agreement, (b) your violation of any law or rights of any third party, or (c) your use of our website.</p>
                            <p><strong>Privacy Policy</strong> </p>
                            <p>You consent to our processing and sharing of personal information about you and other members of your party that you have provided to us in accordance with the terms of and for the purposes set forth in our privacy policy. You represent that you have read and agree to the terms of our privacy policy, which can be found at our website.</p>
                            <p><strong>3. Additional Terms</strong> </p>
                            <p><strong>Warranties, Disclaimers and Limitation of Liability</strong> </p>
                            <p>FOR THE AVOIDANCE OF DOUBT, REFERENCES HEREIN TO "US" "WE" AND "OUR" SHALL ALSO REFER TO OUR AFFILIATES. THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES PROVIDED BY US OR OUR SUPPLIERS OR PUBLISHED ON OUR WEBSITE MAY INCLUDE INACCURACIES OR ERRORS, INCLUDING PRICING ERRORS. WE DO NOT GUARANTEE THE ACCURACY OF, AND DISCLAIM ALL LIABILITY FOR ANY ERRORS OR OTHER INACCURACIES RELATING TO SUCH INFORMATION THAT APPEARS ON OUR WEBSITE. WE EXPRESSLY RESERVE THE RIGHT TO CORRECT ANY PRICING ERRORS ON OUR WEBSITE AND/OR ON PENDING RESERVATIONS MADE UNDER AN INCORRECT PRICE. IN SUCH EVENT, IF AVAILABLE, WE WILL OFFER YOU THE OPPORTUNITY TO KEEP YOUR PENDING RESERVATION AT THE CORRECT PRICE OR WE WILL CANCEL YOUR RESERVATION WITHOUT PENALTY.</p>
                            <p>ANY RATINGS FOR SUPPLIERS ARE INTENDED ONLY AS GENERALGUIDELINES, AND WE DO NOT GUARANTEE THE ACCURACY OF THE RATINGS. WE MAKE NO GUARANTEES ABOUT THE AVAILABILITY OF SPECIFIC PRODUCTS AND SERVICES. WE MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES PROVIDED BY US OR CONTAINED ON OUR WEBSITE FOR ANY PURPOSE. THE INCLUSION OR OFFERING OF ANY PRODUCTS OR SERVICES BY US DOES NOT CONSTITUTE OUR ENDORSEMENT OR RECOMMENDATION OF SUCH PRODUCT OR SERVICE. ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES THAT OUR WEBSITE, ITS SERVERS OR ANY EMAIL SENT FROM US OR OUR SUPPLIERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT. WARRANTY DISCLAIMERS MAY VARY FROM YamacityTE TO YamacityTE. </p>
                            <p>THE CARRIERS, HOTELS AND OTHER SUPPLIERS PROVIDING TRAVEL OR OTHER SERVICES ON THIS WEBSITE ARE INDEPENDENT CONTRACTORS AND NOT AGENTS OR EMPLOYEES OF THE US. WE ARE NOT LIABLE FOR THE ACTS, ERRORS, OMISSIONS, REPRESENTATIONS, WARRANTIES, BREACHES OR NEGLIGENCE OF ANY SUCH SUPPLIERS OR FOR ANY PERSONAL INJURIES, DEATH, PROPERTY DAMAGE, OR OTHER DAMAGES OR EXPENSES RESULTING THEREFROM. WE HAVE NO LIABILITY AND WILL MAKE NO REFUND IN THE EVENT OF ANY DELAY, CANCELLATION, OVERBOOKING, STRIKE, FORCE MAJEURE OR OTHER CAUSES BEYOND OUR CONTROL, AND WE HAVE NO RESPONSIBILITY FOR ANY ADDITIONAL EXPENSE, OMISSIONS, DELAYS, RE-ROUTING OR ACTS OF ANY GOVERNMENT OR AUTHORITY.</p>
                            <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, YOUR ACCESS TO, DISPLAY OF OR USE OF THIS WEBSITE OR OUR SERVICES OR WITH THE DELAY OR INABILITY TO ACCESS, DISPLAY OR USE OUR WEBSITE WHETHER BASED ON A THEORY OF NEGLIGENCE, CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                            <p>IF, DESPITE THE LIMITATION ABOVE, WE ARE FOUND LIABLE FOR ANY LOSS OR DAMAGE WHICH ARISES OUT OF OR IN ANY WAY CONNECTED WITH ANY OF THE OCCURRENCES DESCRIBED ABOVE, THEN OUR LIABILITY WILL IN NO EVENT EXCEED, IN THE AGGREGATE, THE GREATER OF (A) THE SERVICE FEES YOU PAID TO US IN CONNECTION WITH SUCH TRANSACTION(S) ON THIS WEBSITE, OR (B) ONE-HUNDRED DOLLARS (US$100.00) OR THE EQUIVALENT IN LOCAL CURRENCY.</p>
                            <p>THE LIMITATION OF LIABILITY REFLECTS THE ALLOCATION OF RISK BETWEEN THE PARTIES. THE LIMITATIONS SPECIFIED IN THIS SECTION WILL SURVIVE AND APPLY EVEN IF ANY LIMITED REMEDY SPECIFIED IN THESE TERMS IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. </p>
                            <p><strong>General</strong></p>
                            <p>We are acting as an independent contractor and no joint venture, partnership or employment relationship exists between you and us or our Suppliers as a result of this Agreement or your use of our website.</p>
                            <p>We reserve the right at any time to modify this Agreement without prior notice to you. Please refer to our website at <a href="http://www.yamacitytravel.com">www.yamacitytravel.com</a> from time to time to review the most current version of the Agreement. Your continued access or use of our website or services signifies your acceptance of the modifications to the Agreement. You may not assign your rights or obligations under this Agreement to any third party. We may terminate this Agreement at any time for any reason, and such termination shall not affect any right to relief to which we are entitled at law or in equity. </p>
                            <p>This Agreement shall be governed by the laws of the State of Texas without regard to its conflicts of laws principles. If any provision of this Agreement is found to be invalid, illegal or unenforceable, the enforceability of the remaining provisions will not in any way be affected or impaired.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Exports
 */
export default InfoPage;
