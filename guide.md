Thank you for using the Michigan Gender Document Collator! This document is a customized guide for your situation and county. It will walk you through every step of the name change process in detail. Please notify us of any issues, tips, requests, or other feedback by filling out the form located at [https://tinyurl.com/mgdc-feedback](https://tinyurl.com/mgdc-feedback).
If you are directed to do something else by the court or a clerk, please follow their directions and let us know. If you still need help, additional resources are listed on the last page of this guide.

In the rest of this document, “you” will refer to the individual whose name and/or gender is to be legally changed.
{{ if under 18 }}
"Your parent(s)" will refer to that individual's legal custodian(s), meaning their biological or adoptive parent(s), legal guardian(s), or other individual(s) acting _in loco parentis._
{{ end }}

## Table of Contents

1. Initial Forms
2. Filing Initial Forms
   {{ if under 22 }}
3. Newspaper Publication
   {{ else }}
4. Fingerprinting & Newspaper Publication
   {{ endif }}
5. Court Hearing
6. Social Security
7. Primary ID
8. Birth Certificate
9. Everything Else
10. Resources

## 1. Initial Forms

First, print this entire PDF, including the following documents and forms:

1. This guide;
2. Petition to Change Name (Michigan form PC51);
3. Addendum to Protected Personal Identifying Information (Michigan form M97a);
4. Publication of Notice of Hearing for Name Change (Michigan form PC50);
5. Fee Waiver Request (Michigan form MC20);
6. Application to Correct or Change a Michigan Birth Record (Michigan form DCH-0847-CHGBX);
7. Secretary of State Sex Designation Form (Michigan form, unnumbered);
8. State of Michigan Sex Designation Form (Michigan form, unnumbered);
9. Acceptable ID (Michigan document, unnumbered);
10. Application for a Social Security Card (federal form SS-5).

**Do not print double-sided.** Most public libraries provide printer access at little to no charge with a library card. If you choose to print on a public computer, please ensure that your documents are deleted from the computer before you leave.

The first form to be filed is the **Petition to Change Name** (form PC51.) If necessary, complete **item 1** (concerning active court cases) and **item 5** (concerning criminal record.)
{{ if adult }}
Also fill out **item 2c** and **item 7** as applicable. Your parent(s) should complete and sign under the heading “Signature of Parent/Guardian for Minor.” If one of your parent(s) is deceased or noncustodial, only one parent should sign on page 2 in the field labeled “Petitioner Signature.”
{{ else }}
Sign with your legal name on page 2, in the field labeled “Petitioner Signature.”
{{ endif }}

The second form to be filed is the **Addendum to Protected Personal Identifying Information** (form M97a.) This form is meant to keep sensitive information (birth name, birth date, etc.) out of the (public) court records. This form should already be complete.

The third form is the **Publication of Notice of Hearing for Name Change** (form PC50.) The state of Michigan requires name change hearings to be documented in a local newspaper (unless there is a concrete threat to your safety, such as a stalker or assailant, in which case you may request that the court make the process confidential and unpublished as per Michigan Compiled Laws 711.3, 750.411h, 750.411i; we recommend you contact an attorney should you wish to pursue this.) This will take the form of a notice containing the old and new legal names as well as the date, time, and location of the hearing. {{ if isMinor && !parentsAreOkay }}List the legal names of any noncustodial parents under the heading "TO ALL PERSONS, including:".{{ else }}This form should already be complete. {{ endif }}

The fourth and final form is the **Fee Waiver Request** (form MC20.) This form is optional. It is a request to waive the filing fee assessed upon submitting these documents to the court. It usually ranges from $175-200, depending on the county, and is the largest single fee in the process. Courts will typically not grant your waiver request unless you are on public assistance or your annual income is below 125% of the federal poverty line. However, you may file the request at your discretion; the worst they can do is deny it. If you choose to file this form, complete **items 1 and 3** as applicable.
{{ if under 18 }}
Your parent should sign at the bottom of the first page.
{{ else }}
Sign at the bottom of the first page.
{{ end }}

Once you have completed all the initial forms, you are ready to file.

## 2. Filing Initial Forms

Your filing location is {{court.name}}, located at {{court.address}}. You may file by mail or in person; in either case, include all the forms listed in Part 1, as well as payment. If you are filing by mail, you must pay by check or money order. If you are filing in person, we recommend that you call the court at {{ court.phone }} to confirm their open hours and accepted payment types.

{{ specific_court_info }}

**By state law, court clerks are barred from answering questions about the forms.** We recommend that you direct any questions you may have to the court’s legal assistance center, a local LGBT organization, or an attorney. The clerk will return a copy of the Petition to Change Name with a case number.

While you do these next steps, we recommend that you call the court every few weeks until you receive your court hearing date to make sure that there were no mistakes. Do not simply wait for a notice in the mail.

{{ if over 22 }}

## 3. Fingerprinting & Newspaper Publication

{{ else }}

## 3. Newspaper Publication

{{ endif }}

{{ if over 22 }}
The following location(s) are recommended for fingerprinting in your county:

{{ for loc in cty.fingerprint_locations }}

- loc.address (loc.link)
  {{ end }}

If you cannot schedule an appointment online at the listed URL, you will need to schedule by phone or email, using the information listed on their website. We also recommend that you check their accepted payment options.

At your appointment, you will probably be asked if you want an FBI or state fingerprint card; either is acceptable. Do not use live-scan fingerprinting services unless so instructed by the court. **Do not bend or fold your fingerprint card.**

You will need to write a check, made out to the State of Michigan, like so:

![alt_text](images/image1.png "image_tooltip")

You will then need to mail the fingerprint card, a copy of your Petition to Change Name, and the check to the Michigan State Police like so:

![alt_text](images/image2.png "image_tooltip")
{{ endif }}

Upon filing the Petition to Change Name, you may be instructed by the clerk to place a legal notice with a local newspaper. If you were not, we recommend that you confirm that the court is handling this, as well as in which paper they are publishing. If they are, wait for an invoice from that paper. Remit payment by check at your earliest convenience. If you do not pay at least seven days in advance of your hearing date, your hearing may be canceled or postponed.

If you were instructed to place the notice yourself, the court-approved newspapers in your county are as follows:

{{ for paper in cty.papers }}

- paper.name (paper.link)
  {{ end }}

At the provided link, contact the newspaper about placing a legal notice for your name change hearing. Make sure the publication date is more than seven days before your court date. After a few days, confirm with the court that they have received the necessary paperwork from the newspaper.

## 4. Court Hearing

On the day of your hearing, you{{ if under 18 }} and your parent(s){{ endif }} should dress appropriately for a courtroom, even if the hearing is virtual. The hearing may begin late, but it should only take a few minutes once it starts.

Please note that your hearing is public, and it is possible for others to attend, including objectors. If this is a concern for you, consider an in-person hearing, and bring supportive friends.

You{{ if under 18 }}r parent(s){{endif}} will be sworn in and questioned. The questions vary from court to court, but you can expect some of the following:

#### THIS SECTION NEEDS FURTHER CONFIRMATION BEFORE DEPLOYMENT

- What is your current legal name?
- What is your desired legal name?
- What is your date of birth?
- Have you lived in this county for over a year?
- Are you doing this for fraudulent reasons?
- Have you paid the publication fee to an approved newspaper?
- In your own words, why do you want to change your name?
- Is there anything else you’d like the court to know?
- You may also be asked "Do you know of anyone who would oppose this name change?" Having answered "no" to the "fraudulent reasons" question, you can most likely answer "no" to this one. In particular, **you can safely disregard any "opposition" on purely transphobic grounds.** (Compare the history of the phrase "speak now or forever hold your peace.")

#### END FURTHER CONFIRMATION

At this point the name change should be granted and the hearing should end promptly. The document that you will need to get afterward is called the “Order Following Hearing On Petition To Change Name,” but we will call it the “court order”. You will probably be asked whether you want to pick up your court order at the court or have it mailed. The court should have the order ready for pickup within a few hours or the next day. Mailing the order will take several days. Be sure to request a certified copy of your court order.

Once you have the certified copy of the court order, you are ready to file with the Social Security administration. Keep the original court order in a safe place.

## 5. Social Security

Since all government databases use data from the Social Security administration, you must change your information with them first before you can change it anywhere else.

First, complete the “Application for a Social Security Card” (form SS-5.) Enter your SSN in section 2, and those of your parents in sections 9-10. If you do not know and/or cannot obtain their SSNs, mark “Unknown” in the appropriate section. The “Race” and “Ethnicity” fields are optional, and left blank; you may fill them in at your discretion.

{{ if self.gender == "X" }}
Unfortunately, the SSA does not currently provide a nonbinary/”X” gender marker. You will need to check a binary gender in section 8; mark whichever you want.
{{ end }}

{{ if under 18 }}
Your parent/guardian should sign in section 17.
{{ else }}
Sign the document in section 17 in your old name.
{{ end }}

You can find the nearest Social Security office at [https://secure.ssa.gov/ICON/main.jsp](https://secure.ssa.gov/ICON/main.jsp). We recommend that you call to check if your chosen location is by appointment only. You will need identification to prove your identity, age, and citizenship. A state ID, drivers license, or passport will be acceptable. If you do not have those, refer to page two of form SS-5 for other accepted forms of ID. You will also need to bring your completed Application for a Social Security Card, as well as your court order. This service is provided free of charge.

Tell the clerk that you are updating your Social Security information. They will request the Social Security form, ID documents, and court order. You should be informed that, as of 20 October 2022, the administration’s policy allows you to update your gender marker at any time without giving a reason. (See [https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/](https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/).) They should approve the change and give you a receipt, which you should keep for your records. This receipt is sufficient to update your primary identification with the Secretary of State as early as the next business day; you do not need to wait for the new Social Security card in the mail.

## 6. Secretary of State

This section covers the process of updating your primary identification (driver’s license/state ID) and any vehicle registrations you may have. If this is not relevant to you, proceed to the next section. You will need to schedule an in-person appointment at your local Secretary of State office, which can be done at [https://dsvsesvc.sos.state.mi.us/TAP/\_/](https://dsvsesvc.sos.state.mi.us/TAP/_/).

If you already have a driver’s license or state ID, you will need to bring it to the appointment, as well as the completed Michigan Secretary of State Sex Designation Form; if not, bring the forms of identification you used for Social Security. Arrive a few minutes early and check in at the kiosk.

If you do not already have a driver’s license or state ID, tell the clerk that you are applying for one; the appointment should proceed normally. Make sure the gender marker is set correctly.

If you do have primary identification, tell the clerk that you are updating the name and/or gender marker on it. They will ask for identification, your court-ordered name change, and the Sex Designation Form.

Optionally, you may also update your vehicle registration(s). You will be given another form, which you should sign and initial in your new legal name. You will be assessed a fee for each vehicle.

## 7. Birth Certificate

This section covers the process of updating a Michigan birth certificate. If you were born in another state, you will need to follow their process instead.

This process is done by mail only, so you will need a large envelope in which to send the paperwork. You will need to complete the **Application to Correct or Change a Michigan Birth Record** (form DCH-0847-CHGBX) and the **State of Michigan Sex Designation Form**.

{{ if under 15 }}
Your parent/guardian will need to sign both forms on the “Signature of Person Requesting Change” and the “Parent/Guardian Signature” lines respectively.
{{ else if under 18 }}
You will need to sign the State of Michigan Sex Designation Form on the “Signature of Person on Record” line using your old name. Your Parent/Guardian will need to sign both forms on the “Signature of Person Requesting Change” and the “Parent/Guardian Signature” lines respectively.
{{ else }}
You will need to sign both forms on the “Signature of Person Requesting Change:” and the “Signature of Person on Record:” lines respectively using your old name.
{{ endif }}

Complete the "Payment" section on page 2 as applicable. You will also need to write a check as shown below. (The example uses $50, but use the amount you entered under "TOTAL ENCLOSED.")

![alt_text](images/image3.png "image_tooltip")

{{ if under 18 }}
Your parent or guardian will need to make a photocopy of their primary identification. If they don’t have a state ID or driver’s license, refer to the document in your printout titled “Acceptable ID”. If they are your guardian, they will need to include a copy of the court guardianship. Only one parent or guardian’s identification is needed.
{{ else }}
You will need to make a photocopy of your primary identification. If you don’t have a state ID or driver’s license, refer to the document in your printout titled “Acceptable ID”.
{{ endif }}

You must also include a photocopy of the court order in the envelope. **Do not send any original documents; they will not be returned to you.** Fill out the envelope’s address as follows:

![alt_text](images/image4.png "image_tooltip")

You can then send it directly from the post office or from your own mailbox if you have one. You should receive a copy of your updated birth certificate in 5 to 6 weeks.

## 8. Everything Else

Once you have the court order and primary identification in your new name, you can change your name almost everywhere else without issue. Some places will even allow for digital updates by scanning in the ID and court order. What follows is a list of places, in no particular order, where you may want to update your name. Any forms that you fill out should be signed in your new name.

- **Bank**: Bring your new ID and court order and request the name on your account(s) be changed. If you have a debit card or checkbook out of this account, then you will need to request new ones. Any joint account holders must also be present to sign.
- **Credit Card**: Most creditors will require you to snail mail or fax a photocopy of your ID and court order. If a particular company is stubborn in updating the account name, consider canceling the card and opening a new card with them or another provider.
- **Work**: If you have an HR system, bring your new ID, new social security card, and court order to them and ask them to update your name. If you get your health insurance through your work, you can have them send the updated information to them on your behalf.
- **Healthcare Providers**: You should be able to bring in only your new ID at your next in-person visit and go to the front secretaries to have your name updated in the system. Be aware that certain medical professionals will need to know your transition status.
- **Gas/Heating Provider**:
  - DTE has a digital submission link for your scanned ID and court order at https://newlook.dteenergy.com/wps/wcm/connect/dte-web/quicklinks/web-form. They will give you a call at some point after you submit the documents to confirm the change.
- **Electricity Provider**:
  - Consumers allows its customers to change the name on the billing account over the phone; their service number is (800) 477-5050. You will need to confirm your old name & address on the account.
- **Water/Sewer**: Should be able to be done by phone, email, or snail mail.
- **Internet Provider**: Should be able to be done online.
- **Garbage Service**: Should be able to be done by email or snail mail.
- **Mortgage**: Should be able to be done by email or snail mail.
- **Property/House Title**: Contact your county's Registry of Deeds. ID and court order are both required.
- **Phone Service**: Go to the nearest store of your carrier network with your new ID and court order and request your information be updated.
- **Taxes (IRS)**: The IRS will be informed of your name change when you update your information with Social Security. You do not need to contact them.
- **Educational Records**:
  - **Primary School**: Each school will have different requirements and protocols; contact them and see what theirs is. Be aware that Michigan law does not require your high school to update your educational records, so it is possible that they may refuse.
  - **College**: Contact the Student Records Department of your university. Required documents will vary by institution. You may also consider updating your school profile and email, if applicable.
- **Insurance**: Contact your insurer(s). Requirements will vary.
- **Government Assistance**: Contact your assistance agency to update their case file. You should only need a primary ID and court order.
- **Voter Registration**: Michigan has automatic voter registration, so no action is required unless you opted out when renewing your primary ID. If you were too young for that step, then it will be put in your correct name & gender the first time you register to vote.
- **Some other places to consider**:
  - Retirement account
  - Clubs/memberships
  - Municipal tax authorities
  - Online payment services (Venmo, Paypal, etc…)
  - Public transit accounts
  - Monthly subscriptions (Netflix, Hulu, etc…)

## 9. Resources

- [https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Doing-Business-with-MDHHS/Birth-Death-Marriage-and-Divorce-Records/Photo_ID_Alternative_Documents.pdf](https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Doing-Business-with-MDHHS/Birth-Death-Marriage-and-Divorce-Records/Photo_ID_Alternative_Documents.pdf)
- The Social Security Administration’s policy on self-attestation of gender:
  [https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/](https://blog.ssa.gov/social-security-implements-self-attestation-of-sex-marker-in-social-security-number-records/)
- [Grand Rapids Trans Foundation](https://grtransfoundation.org/update-program/): Helps people with the name change process in Kent county and provides general support and resources to the trans community.
- [Transgender Name Change Clinic](https://corktownhealth.org/transgender-name-clinic-available/): Helps low income trans people changing their name & gender markers in Oakland, Macomb, and Wayne county.
