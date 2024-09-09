import { forwardRef } from "react";
// import { SetStateAction, forwardRef, useCallback, useEffect } from "react";

interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  shareMode: boolean;
  playing: boolean;
  run: boolean;
}

export const Name: React.FC<React.HTMLProps<HTMLInputElement> & InputProps> =
  forwardRef(
    (
      { shareMode, playing, run, ...rest }: InputProps,
      ref: React.LegacyRef<HTMLInputElement>
    ) => {
      // const onChange = useCallback(
      //   (e: { target: { value: SetStateAction<string> } }) => {
      //     setName(e.target.value);
      //     window.history.pushState({}, "", `?name=${e.target.value}`);
      //   },
      //   [setName]
      // );

      // useEffect(() => {
      //   const queryString = window.location.search;
      //   const urlParams = new URLSearchParams(queryString);
      //   // const nameParam = urlParams.get("name");
      //   // if (nameParam !== null) {
      //   //   setName(nameParam);
      //   // }
      // }, [setName]);

      return (
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
              alignItems: "center",
            width: "100dvw",
            zIndex: 40,
          }}
        >
          <input
            id="name"
            {...{
              ref,
              style: {
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "4rem",
                color: "#ffabf6",
                opacity: 0.9,
                border: 0,
                outline: 0,
                textAlign: "center",
                backgroundColor: "transparent",
                width: 400,
                ...(shareMode && playing
                  ? {
                      appearance: "none",
                      backgroundColor: "transparent",
                      textAlign: "center",
                      // display: name.length > 0 ? "block" : "none",
                    }
                  : {}),
              },
              value: "Phucdaynay",
              // onChange,
              disabled: shareMode && playing && run,
              readOnly: true,
              // spellCheck: false,
              // autoFocus: true,
              ...rest,
            }}
          />
        </div>
      );
    }
  );
