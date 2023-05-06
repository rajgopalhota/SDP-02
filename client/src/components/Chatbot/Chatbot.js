import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import rabbit from './Assets/rabbit.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function PageChange(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.page === "contact") {
            navigate("/autobots/contact", { replace: true });

        } else if (props.page === "team") {
            navigate("/autobots/aboutus", { replace: true });

        } else if (props.page === "spare") {
            navigate("/autobots/spare", { replace: true });

        } else if (props.page === "products") {
            navigate("/autobots/products", { replace: true });

        } else if (props.page === "testridehistory") {
            navigate("/autobots/testridehistory", { replace: true });

        } else if (props.page === "orders") {
            navigate("/autobots/orders", { replace: true });

        }
    }, []);
}

const steps = [
    {
        id: 'intro',
        message: 'Hello User!',
        trigger: 'intro1',
    },
    {
        id: 'intro1',
        message: 'How Can i help you?',
        trigger: 'intro2',
    },
    {
        id: 'intro2',
        options: [
            { value: 1, label: 'Our Different Pages', trigger: 'intro-user' },
            { value: 2, label: 'About our Company', trigger: 'company' },
        ],
    },
    {
        id: 'company',
        message: 'Welcome to Autobots, where we are passionate about crafting the best vehicles possible. As a leading automobile company, we are dedicated to providing our customers with high-quality, reliable, and cutting-edge vehicles that are designed to meet their unique needs and preferences.'

            + "At Autobots, we understand that a vehicle is not just a means of transportation; it is an extension of one's personality and lifestyle."

            + " Thank you for choosing Autobot as your go-to destination for all your automobile and spare parts needs. We look forward to serving you and providing you with the best products and services in the industry."

            + "Autobots is a leading automobile company that is passionate about crafting the best vehicles possible."
            + " Autobots combines top-notch engineering with state-of-the-art technology to create vehicles that not only look great but also provide a smooth and safe driving experience.",
        trigger: 'intro1',
    },
    {
        id: 'intro-user',
        options: [
            { value: 1, label: 'Contact', trigger: 'Contact' },
            { value: 2, label: 'Spare', trigger: 'Spare' },
            { value: 3, label: 'Team', trigger: 'Team' },
            { value: 4, label: 'products', trigger: 'products' },
            { value: 5, label: 'testridehistory', trigger: 'testridehistory' },
            { value: 6, label: 'orders', trigger: 'orders' },
        ],

    },
    {
        id: 'Contact',
        component: <PageChange page="contact" />,
        trigger: "intro1"
    },
    {
        id: 'Spare',
        component: <PageChange page="spare" />,
        trigger: "intro1"
    },
    {
        id: 'Team',
        component: <PageChange page="team" />,
        trigger: "intro1"
    }, {
        id: 'products',
        component: <PageChange page="products" />,
        trigger: "intro1"
    },
    {
        id: 'testridehistory',
        component: <PageChange page="testridehistory" />,
        trigger: "intro1"
    },
    {
        id: 'orders',
        component: <PageChange page="orders" />,
        trigger: "intro1"
    },

];
// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: rabbit,
    floating: true,

};

function Chatbot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="AutoBot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
