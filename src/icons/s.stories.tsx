import { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";

type IconType = { [key: string]: () => JSX.Element };

/**
 * Click on the icon to copy code
 */

const meta: Meta = {
  title: "Components/Icons",
  component: Icon as unknown as React.ComponentType<{}>,
  parameters: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          gap: "0.5rem",
          display: "grid",
          gridAutoRows: "3rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(3rem, 1fr))",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = () => {
  const icons: IconType = Icon as IconType;
  const iconEntries = Object.entries(icons);
  const handleClick = async (iconName: string) => {
    const alertContent = `<Icon.${iconName} />`;
    try {
      await navigator.clipboard.writeText(alertContent);
      alert(alertContent);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <>
      {iconEntries.map(([key, IconComponent], index) => (
        <button
          style={{
            display: "grid",
            placeItems: "center",
            fontSize: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0.0625rem 0.125rem rgba(0,0,0,.2)",
          }}
          key={index}
          onClick={() => handleClick(key)}
        >
          {typeof IconComponent === "function" ? (
            <IconComponent />
          ) : (
            <img src={IconComponent} alt={key} style={{ maxWidth: "2rem" }} />
          )}
        </button>
      ))}
    </>
  );
};

Primary.args = {};
