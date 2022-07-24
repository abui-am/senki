import React, {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import qrcode from 'qrcode';

const QRCanvas: React.FC<{ qrUrl: string }> = ({ qrUrl }) => {
  const ref = useRef<DetailedHTMLProps<any, any>>();

  const setInitialData = useCallback(async () => {
    await qrcode.toCanvas(ref.current, qrUrl);
  }, [qrUrl]);

  useEffect(() => {
    setInitialData();
  }, [qrUrl, setInitialData]);
  return <canvas ref={ref}></canvas>;
};

export default QRCanvas;
