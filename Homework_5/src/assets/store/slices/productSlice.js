import { createSlice } from "@reduxjs/toolkit";
import { EPSON_ECOTANK_L1250 as PRINTER_STATE } from "./../../../constants";

const SLICE_NAME = "product";

const initialState = PRINTER_STATE;

const productSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        toggleFav(state) {
            state.isFav = !state.isFav;
        },
    },
});

export const { toggleFav } = productSlice.actions;
export default productSlice.reducer;
