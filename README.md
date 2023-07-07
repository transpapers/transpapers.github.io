# Transpapers
*Almost-fully-automated trans rights.*

[Transpapers](https://transpapers.lgbt) is a web tool designed by Stephanie Beckon and [Sasha Lišková](https://sverona.dev) which tries to automate as much of the process of legally affirming one's gender as possible. In the state of Michigan, this process is rather arduous, even after multiple rounds of lobbying for simplification.

Its methodology is documented here to be applicable to other states. Our goal is to spread almost-fully-automated trans rights as far as we can.

## Design
The web tool unifies the form fields of each of the documents to be filed into a single data object. It uses [pdf-lib](https://pdf-lib.js.org/) to programmatically fill those documents and concatenates them into a single PDF document.

A personalized guide is also generated as a PDF using [Nunjucks](https://mozilla.github.io/nunjucks/) and pdf-lib, and included in the printout.

To ensure data security, everything runs client-side. To protect against phishing [homograph attacks](https://en.wikipedia.org/wiki/IDN_homograph_attack), the site is registered on the .lgbt TLD, which prohibits domains registered with intent to defraud or deceive. Domain abuse should be reported [to Identity Digital.](https://identity.digital/policies/report-abuse/)

## Data
In the process of developing this tool, we gathered court and sheriff locations at the county level. This data is available in this repository as `countyInfo.tsv`.

## Replication
TBD

## Support
If you'd like to donate, donate to the [Grand Rapids Trans Foundation](https://grtransfoundation.org) or to your local queer nonprofit. Solidarity!

## License
GPLv3
