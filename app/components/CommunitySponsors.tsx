export default function CommunitySponsors() {
  return (
    <div id="community-sponsors" className="py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mt-2 text-3xl sm:text-5xl font-cal font-semibold text-neutral-100">
          Community Sponsors
        </h2>
        <h3 className="mt-4 text-lg sm:text-lg font-cal font-semibold text-neutral-200">
          Making the local ecosystem stronger
        </h3>
        <div className="flex flex-col flex-wrap justify-center items-center mx-auto gap-4 mt-12">
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://www.inno-it.es" target="_blank">
              <img
                className="h-auto max-h-28 object-contain hover:cursor-pointer"
                src="/logos/community/innoit.png"
                alt="InnoIT"
              />
            </a>
            <a href="https://techfems.org/" target="_blank">
              <img
                className="h-auto max-h-40 object-contain hover:cursor-pointer"
                src="/logos/community/techfems.png"
                alt="TechFeems"
              />
            </a>
            {/*<a href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-40 object-contain hover:cursor-pointer"
                  src="/logos/Anthropic.png"
                  alt="Anthropic"
                />
              </a>
              <a href="https://tech.cornell.edu/jacobs-technion-cornell-institute/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-40 object-contain hover:cursor-pointer"
                  src="/logos/ctech2.png"
                  alt="Cornell Tech"
                />
              </a> */}
          </div>
          {/* 
            <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="https://www.passes.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/passes.png"
                  alt="Passes"
                />
              </a>
              <a href="https://www.sciphi.ai/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/sciphi.png"
                  alt="SciPhi"
                />
              </a>
              <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/hugging-face.jpeg"
                  alt="Hugging Face"
                />
              </a>
              <a href="https://meta.com" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/meta2.jpg"
                  alt="Meta"
                />
              </a>
              <a href="https://warp.dev" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/warp2.jpg"
                  alt="Warp"
                />
              </a>

            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <img
                className="h-auto max-h-32 object-contain"
                src="/logos/nyAILab.png"
                alt="New York AI Labs"
              />
              <a href="https://promptlayer.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/prompt2.png"
                  alt="PromptLayer"
                />
              </a>
              <a href="https://lastmileai.dev/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/lastmileai2.jpeg"
                  alt="LastMileAI"
                />
              </a>
              <a href="https://www.nomic.ai/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/nomic2.jpg"
                  alt="Nomic"
                />
              </a>
              <a href="https://www.antimetal.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/antimetal.png"
                  alt="Antimetal"
                />
              </a>

            </div>

            <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://supermaven.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-auto max-h-32 object-contain hover:cursor-pointer"
                    src="/logos/supermaven.jpeg"
                    alt="Supermaven"
                  />
                </a>
            <a href="https://www.freeagency.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/free_agency2.jpeg"
                  alt="Free Agency"
                />
              </a>
              <a href="https://blueprint.bryanjohnson.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/blueprint.png"
                  alt="Blueprint Bryan Johnson"
                />
              </a>
              <a href="https://cometeer.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/Comeeter.png"
                  alt="Cometeer"
                />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <a href="https://645ventures.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/645 Ventures.png"
                  alt="645 Ventures"
                />
              </a>
              <a href="https://www.hf0.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/HF0.png"
                  alt="HF0"
                />
              </a>
              <a href="https://everywhere.vc/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/everywhereVC.jpg"
                  alt="EverywhereVC"
                />
              </a>
              <a href="https://tolacapital.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/tolacapital.png"
                  alt="Tola Capital"
                />
              </a>
              <a href="https://www.samsungnext.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/samsung.jpg"
                  alt="Samsung Next"
                />
              </a>

            </div> */}

          {/* <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.cornell.edu/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/cornell.jpg"
                  alt="Cornell"
                />
              </a>
              <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/columbia.jpg"
                  alt="Columbia"
                />
              </a>
              <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto max-h-32 object-contain hover:cursor-pointer"
                  src="/logos/nyu.jpg"
                  alt="NYU"
                />
              </a>
          </div>jfjfjf */}
        </div>
      </div>
    </div>
  );
}
