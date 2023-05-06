import React from 'react'

export default function Tc() {
    return (
        <div>
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Autobots Terms&Conditions</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body large tcpoints">
                    <ol>
                        <li><span>Eligibility:</span> The company may specify the eligibility criteria for using their services, such as age and driving record requirements.
                        </li>
                        <li><span>Payment:</span> The company may outline the payment methods they accept and any fees or charges associated with their services.
                        </li>
                        <li><span>Liability:</span>The company may include a section on liability, outlining the extent to which they are responsible for damages or losses incurred while using their services.
                        </li>
                        <li><span>Insurance:</span>The company may require customers to have certain types of insurance coverage before using their services.
                        </li>
                        <li><span>Usage restrictions:</span> The company may specify any restrictions on the use of their vehicles or services, such as geographic or mileage limitations.
                        </li>
                        <li><span>Maintenance and repairs:</span> The company may outline their policies on maintenance and repairs, including who is responsible for these costs and how they should be handled.
                        </li>
                        <li><span>Termination:</span> The company may include a section on how and when the contract can be terminated by either party.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
