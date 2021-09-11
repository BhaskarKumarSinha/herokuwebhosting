import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = () => {
    return (
        <Box>

            <Container>

                <Row>

                    <Column>

                        <Heading>Ritual</Heading>

                    </Column>

                    <Column>

                        <Heading>Shop</Heading>

                        <FooterLink href="#">Multivitamin</FooterLink>

                        <FooterLink href="#">Protein</FooterLink>

                        <FooterLink href="#">Bundles</FooterLink>

                        <FooterLink href="#">Gift Card</FooterLink>

                    </Column>

                    <Column>

                        <Heading>About</Heading>

                        <FooterLink href="#">Ingridients</FooterLink>

                        <FooterLink href="#">Who You Are</FooterLink>

                        <FooterLink href="#">Our Clinical Study</FooterLink>

                        <FooterLink href="#">The Journal</FooterLink>
                        <FooterLink href="#">Reviews</FooterLink>
                    </Column>

                    <Column>

                        <Heading>More</Heading>
                        <FooterLink href="#">Careers</FooterLink>

                        <FooterLink href="#">Press</FooterLink>

                        <FooterLink href="#">Help</FooterLink>
                </Column>
            </Row>
        </Container>
        </Box >
    )
}
export default Footer;
