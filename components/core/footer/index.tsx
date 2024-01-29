import React from "react";
import NextImage from "next/image";
import { defaultPx } from "lib/utils/default-container-px";
import {
  Box,
  chakra,
  Container,
  ContainerProps,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FooterTitle } from "./footer-title";
import { FooterLink } from "./footer-link";
import { NextResponsiveImage } from "../next-responsive-image";

const LINK_GAPS = [2, 2, 8];

interface FooterProps {
  _wrapper?: ContainerProps;
  mode?: "light" | "dark";
}

export function Footer(props: FooterProps) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridTemplateAreas={[
          "'logo logo' 'solution for' 'company legal'",
          "'logo logo' 'solution for' 'company legal'",
          "'logo solution for company legal'",
        ]}
      >
        <GridItem gridArea="logo">
          <Box flexShrink={0} mb={8}>
          </Box>
        </GridItem>
        <GridItem gridArea="solution">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Links</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="RTB Reports"
              href="https://www.howmuchrent.com/r/rtb_reports"
            />
            <FooterLink
              mode={props.mode}
              title="Tenant Reviews"
              type="external"
              href="https://www.howmuchrent.com/r/user_reviews"
            />
            <FooterLink
              mode={props.mode}
              title="Properties charging over 2%"
              type="external"
              href="https://www.howmuchrent.com/r/above2percent"
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="for">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Resources</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="Website"
              href="https://www.howmuchrent.com"
            />
          </VStack>
        </GridItem>

        <GridItem gridArea="company">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Social Links</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="Reddit"
              type="external"
              href="https://www.reddit.com/r/howmuchrentIreland/"
            />
            <FooterLink
              mode={props.mode}
              title="Instagram"
              type="external"
              href=" https://www.instagram.com/howmuchrent/"
            />
            <FooterLink
              mode={props.mode}
              title="Twitter"
              type="external"
              href="https://twitter.com/howmuchrenthq"
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="legal">
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterTitle mode={props.mode}>Legal</FooterTitle>
            <FooterLink
              mode={props.mode}
              title="About"
              type="external"
              href="https://www.howmuchrent.com/about"
            />
            <FooterLink
              mode={props.mode}
              title="Faq"
              type="external"
              href="https://www.howmuchrent.com/faq"
            />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
