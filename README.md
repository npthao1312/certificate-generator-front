# Certificate Generator Front

## Technology
   - React
   - Axios
   - Bootstrap 4

## Configure
Default port 3000

## Web API
Here are APIs that we will use Axios to make HTTP requests:
| Methods | URLs              | Actions                                                       |
|:-------:|-------------------|---------------------------------------------------------------|
| POST    | /create  | save certificate files                                           |

## Project Structure
![Project Structure](https://i.imgur.com/mWCed4n.png)
- cert.service provides methods to save Certificate and get Certificate using Axios.
- homagepage.component contain Home page
- instrpage.component contain Instruction page
- App.js is the container that we embed all React components.
- http-common.js initializes Axios with HTTP base Url and headers. We now use flask default 5000.

## Screenshot Images
Homepage
![Homagepage](https://i.imgur.com/4Bvqiob.png)

Instruction page
![Instruction](https://i.imgur.com/iTXdMLd.png)

Input name and and upload certificate template
https://i.imgur.com/VFPSCOF.png

Edit name position
https://i.imgur.com/dWSW6bT.png
