import blockchain from '../img/portImages/blockchain.png';
import imageshare from '../img/portImages/imageshare.png';
import lottery from '../img/portImages/lottery.png';
import stok from '../img/portImages/stok.png';
import blog from '../img/portImages/blog.png';
import ecommerce from '../img/portImages/ecommerce.png';
import aigame from '../img/portImages/ai-game.png';
import nft from '../img/portImages/nft.png';
import portfolio from '../img/portImages/portfolio.png';
import covid from '../img/portImages/covid.png';
import defi from '../img/portImages/defi.png';
import bitcoin from '../img/portImages/bitcoin.png';

const portfolios = [
    {
        id: 1,
        category: 'Blockchain',
        image: imageshare,
        link1: 'https://github.com/Haidar1528/image_share_blockchain',
        title: 'Image Sharing Dapp',
        text: 'Created with truffle and react'
    },
    {
        id: 2,
        category: 'Blockchain',
        image: defi,
        link1: 'https://github.com/Haidar1528/brownie_defi',
        title: 'Defi App',
        text: 'Defi app with brownie and react typescript'
    },
    {
        id: 3,
        category: 'Blockchain',
        image: lottery,
        link1: 'https://github.com/Haidar1528/brownie_lottery',
        title: 'Lottery Smart Contracts',
        text: 'A Lottery smart contract made with brownie'
    },
    {
        id: 4,
        category: 'Blockchain',
        image: nft,
        link1: 'https://github.com/Haidar1528/nft_minting',
        title: 'App to mint NFTs',
        text: 'A truffle project to mint NFTs'
    },

    {
        id: 5,
        category: 'React JS',
        image: portfolio,
        link1: 'https://github.com/Haidar1528/portfolio',
        title: 'React Portfolio',
        text: 'Portfolio website'
    },
    {
        id: 6,
        category: 'React JS',
        image: covid,
        link1: 'https://github.com/Haidar1528/covid_traker',
        title: 'Covid Tracker',
        text: 'React app to track covid cases'
    },
    {
        id: 7,
        category: 'React JS',
        image: bitcoin,
        link1: 'https://github.com/BullCarter/bullcarter_webapp',
        title: 'Crypto Tracker',
        text: 'React app to track Crypto price'
    },

    {
        id: 8,
        category: 'Django',
        image: ecommerce,
        link1: 'https://github.com/Haidar1528/ecommerce',
        title: 'Ecommerce App',
        text: 'Fullstack ecommerce app'
    },
    {
        id: 9,
        category: 'Django',
        image: blog,
        link1: 'https://github.com/Haidar1528/koding_handle_blog_v2',
        title: 'Blog App',
        text: 'Fullstack blog website'
    },
    {
        id: 10,
        category: 'Django',
        image: stok,
        link1: 'https://github.com/Haidar1528/bullcarter_stock_market_app',
        title: 'Stock App',
        text: 'Fullstack stok market app'
    },

    {
        id: 11,
        category: 'Python',
        image: aigame,
        link1: 'https://github.com/Haidar1528/flappy_bird_ai',
        title: 'Flappy bird AI game',
        text: 'Never losing AI game'
    },

    {
        id: 12,
        category: 'Go lang',
        image: blockchain,
        link1: 'https://github.com/Haidar1528/golang_blockchain',
        title: 'A simple blockchain',
        text: 'go lang impelmentation of go lang'
    },





]

export default portfolios;