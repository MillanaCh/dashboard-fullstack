import { GridColumnMenu } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  // const { GridColumnMenuProps } = props;
  return (
    <GridColumnMenu
      {...props}
      // Override `columnMenuFilterItem` component
      slotProps={{
        // Swap positions of filter and sort items
        columnMenuFilterItem: {
          displayOrder: 0, // Previously `10`
        },
        columnMenuSortItem: {
          displayOrder: 10, // Previously `0`
        },
      }}
    />
    // <GridColumnMenuContainer
    //   hideMenu={hideMenu}
    //   currentColumn={currentColumn}
    //   open={open}
    // >
    //   <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
    //   <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    // </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
