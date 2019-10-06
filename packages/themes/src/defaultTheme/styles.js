import fonts from './fonts'
import layout from './layout'
import colors from './colors'

export default {

	// Input styles
	inputFontSize: fonts.size.md,
	inputFontWeight: fonts.weight.sm,
	inputLineHeight: fonts.lineHeight.md,
	inputColor: colors.darkGray,
	inputBgColor: colors.white,
	inputBorderColor: colors.lightGrayishBlue,
	inputBorderWidth: '1px',
	inputBorderRadius: `${layout.radius.sm}px`,
	inputErrorBorderColor: colors.red,
	inputPaddings: `${layout.basePadding * 0.75}px ${layout.basePadding * 1.5}px`,

	// Buttons
	primaryButtonBg: colors.blue,
	primaryButton: colors.white
}
