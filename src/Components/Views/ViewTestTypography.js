import React from "react";
import View from "../View";
import { VIEW_TEST } from "../../data/VIEW_TEST";
import SectionsRenderer from "../SectionsRenderer";
import Title from "../Elements/Title";
import Paragraph from "../Elements/Paragraph";

const ViewTest = () => {
  const sectionsData = VIEW_TEST;

  return (
    <View transition={false}>
      <Title h={1}>Headline H1</Title>
      <Paragraph large>
        LARGE - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={2}>Headline H2</Title>
      <Paragraph large>
        LARGE - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={3}>Headline H3</Title>
      <Paragraph large>
        LARGE - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={2}>Headline H2</Title>
      <Paragraph>
        NORMAL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={3}>Headline H3</Title>
      <Paragraph>
        NORMAL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={4}>Headline H4</Title>
      <Paragraph>
        NORMAL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={3}>Headline H3</Title>
      <Paragraph small>
        SMALL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={4}>Headline H4</Title>
      <Paragraph small>
        SMALL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>

      <Title h={5}>Headline H5</Title>
      <Paragraph small>
        SMALL - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tincidunt ullamcorper urna, sed semper orci laoreet quis.
        Fusce nibh nibh, laoreet quis odio sed, finibus mollis ipsum. Aliquam
        erat volutpat. Vivamus ornare molestie erat ac vehicula. Nunc egestas
        pharetra ornare. Curabitur eget finibus urna. Fusce vestibulum eget leo
        nec iaculis. In placerat justo ac magna hendrerit condimentum. Maecenas
        id urna ut mauris tincidunt molestie ut ac orci.
      </Paragraph>
      <SectionsRenderer sections={sectionsData} />
    </View>
  );
};

export default ViewTest;
