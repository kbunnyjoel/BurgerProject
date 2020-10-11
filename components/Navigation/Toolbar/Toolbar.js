import React from 'react';
import {
    Anchor,
    Box,
    Header,
    Image,
    Button,
    Grommet,
    Text,
    ResponsiveContext,
    Layer
} from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';


const customTheme = deepMerge(grommet, {
    anchor: {
        background: '#6FFFB0',
        textDecoration: 'none',
        fontWeight: 500,
        color: {
            dark: 'status-ok',
            light: 'neutral-2',
        },
        hover: {
            textDecoration: 'underline',
            fontWeight: 700,
        },
    },
});

const toolBar = (props) => {

    const [show, setShow] = React.useState();

    return (
        <Grommet    >
            <Header background="light-2" pad="medium" height="70px">
                <Box height="xxsmall" width="small">
                    <Image
                        fit="contain"
                        src="/burger_logo.png"
                    />
                </Box>
                <ResponsiveContext.Consumer>
                    {size =>
                        size === 'small' ? (
                            <Box full={false} animation="fadeIn" flex="shrink" width="xsmall">
                                <Button label="Show" onClick={() => setShow(true)} />
                                {show && (
                                    <Layer position='left' full='vertical' modal={true} plain={true}
                                        onEsc={() => setShow(false)}
                                        onClickOutside={() => setShow(false)}
                                    >
                                        <Box align="center" background='light-1' width="small" fill='vertical'>
                                            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                                                <Anchor href="#" label="Burger Builder" />
                                                <Anchor
                                                    href="#"
                                                    label="Checkout"
                                                />
                                            </Box>
                                            <Button style={{ width: "50%" }} label="close" fill={false} onClick={() => setShow(false)} />
                                        </Box>
                                    </Layer>
                                )}
                            </Box>
                        ) : (
                                <Box justify="end" direction="row" gap="medium">
                                    <Anchor href="#" label="Burger Builder" />
                                    <Anchor
                                        href="#"
                                        label="Checkout"
                                    />
                                </Box>
                            )
                    }
                </ResponsiveContext.Consumer>
            </Header>
        </Grommet>
    );
};

export default toolBar;