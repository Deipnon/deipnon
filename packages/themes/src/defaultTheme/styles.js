import fonts from './fonts'
import layout from './layout'
import colors from './colors'

export default {

	// Form styles
	formFontSize: fonts.size.md,
	formFontWeight: fonts.weight.sm,
	formLineHeight: fonts.lineHeight.md,
	formColor: colors.darkGray,
	formBgColor: colors.white,
	formBorderColor: colors.lightGrayishBlue,
	formBorderWidth: '1px',
	formBorderRadius: `${layout.radius.sm}px`,
	formErrorBorderColor: colors.red,
	formPaddings: `${layout.basePadding * 0.75}px ${layout.basePadding * 1.5}px`,
	formHeight: `${layout.basePadding * 4.5}px`,

	// Buttons styles
	buttonFontSize: fonts.size.lg,
	buttonDefaultColor: colors.shark,
	buttonPrimaryBg: colors.azureRadiance,
	buttonPrimaryBorderColor: colors.azureRadiance,
	buttonPrimaryColor: colors.white,
	buttonSecondaryBg: colors.paleSky,
	buttonSecondaryBorderColor: colors.paleSky,
	buttonSecondaryColor: colors.white

}
