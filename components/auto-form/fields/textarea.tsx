import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { AutoFormInputComponentProps } from "../types";

export default function AutoFormTextarea({
	label,
	isRequired,
	fieldConfigItem,
	fieldProps,
}: AutoFormInputComponentProps) {
	const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps;
	const showLabel = _showLabel === undefined ? true : _showLabel;
	return (
		<FormItem>
			{showLabel && (
				<FormLabel className="text-white">
					{label}
					{isRequired && <span className="text-destructive"> *</span>}
				</FormLabel>
			)}
			<FormControl>
				<Textarea {...fieldPropsWithoutShowLabel} />
			</FormControl>
			{fieldConfigItem.description && (
				<FormDescription>{fieldConfigItem.description}</FormDescription>
			)}
			<FormMessage />
		</FormItem>
	);
}
