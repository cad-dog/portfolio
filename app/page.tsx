export default function Page() {
  return (
    <div className="flex w-full justify-center items-center min-h-screen px-2">
      <div className="w-164">
        <div>
          <h1 data-test="heading" className="text-3xl text-blue-300">
            Hello, my name is Christopher Arce.
          </h1>
          <p
            data-test="first-paragraph"
            className="text-3xl text-blue-200 opacity-50 mt-2"
          >
            Software Engineer with a keen interest in full-stack development.
          </p>
          <p data-test="second-paragraph" className="mt-2">
            I'm from Hermosillo, Sonora, Mexico, and specialize in web
            development.
            <br />
            Currently, I'm working at{" "}
            <a
              data-test="url"
              className="text-blue-200 hover:underline"
              href="https://www.3pillarglobal.com"
              target="_blank"
            >
              3Pillar
            </a>
            , helping clients to build their solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
