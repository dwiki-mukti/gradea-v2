import {
  ChangeEventHandler,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function RadioSwitch({
  stateHandler,
  options,
  name,
  onChange,
  disabled,
}: {
  stateHandler?: [typeStateInput, Dispatch<SetStateAction<typeStateInput>>];
  options: {
    label?: ReactNode;
    value: any;
  }[];
  name: string;
  // onChange?: MouseEventHandler<HTMLInputElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}) {
  const refRadioInput = useRef<(HTMLInputElement | null)[]>([]);

  const [getter, setter] = stateHandler ?? useState<typeStateInput>({});

  useEffect(() => {
    if (
      refRadioInput.current.length &&
      !getter?.values?.[name] &&
      options?.[0]
    ) {
      refRadioInput.current[0]?.click();
    }
  }, [refRadioInput.current, getter?.values?.[name], options]);

  return (
    <div className={`radio-switch`}>
      {options.map((option, indexOption) => {
        return (
          <label key={indexOption}>
            {option.label ?? option.value}
            <input
              id={option?.value}
              name={name}
              disabled={disabled}
              type="radio"
              className="hidden"
              value={option?.value}
              ref={(element) => {
                if (refRadioInput.current) {
                  refRadioInput.current[indexOption] = element;
                }
              }}
              checked={getter.values?.[name] == option?.value}
              onChange={(e) => {
                if (!disabled) {
                  if (onChange) onChange(e);
                  setter((prev: typeStateInput) => ({
                    ...(prev ?? {}),
                    values: {
                      ...(prev.values ?? {}),
                      [name]: option?.value ?? option,
                    },
                    uncompleteds:
                      prev.uncompleteds?.filter(
                        (uncompleted) => uncompleted != name,
                      ) ?? [],
                  }));
                }
              }}
            />
          </label>
        );
      })}
    </div>
  );
}
