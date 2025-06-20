/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/registry/docs/modules/{namespace}/{name}/{target}/{version}/README.md": {
    get: operations["GetModuleReadme"];
  };
  "/registry/docs/modules/{namespace}/{name}/{target}/{version}/examples/{example}/README.md": {
    get: operations["GetModuleExampleReadme"];
  };
  "/registry/docs/modules/{namespace}/{name}/{target}/{version}/index.json": {
    get: operations["GetModuleVersion"];
  };
  "/registry/docs/modules/{namespace}/{name}/{target}/{version}/modules/{submodule}/README.md": {
    get: operations["GetSubmoduleReadme"];
  };
  "/registry/docs/modules/{namespace}/{name}/{target}/index.json": {
    get: operations["GetModule"];
  };
  "/registry/docs/modules/index.json": {
    get: operations["GetModuleList"];
  };
  "/registry/docs/providers/{namespace}/{name}/{version}/{kind}s/{document}.md": {
    get: operations["GetProviderDocItem"];
  };
  "/registry/docs/providers/{namespace}/{name}/{version}/cdktf/{language}/{kind}s/{document}.md": {
    get: operations["GetProviderCDKTFDocItem"];
  };
  "/registry/docs/providers/{namespace}/{name}/{version}/cdktf/{language}/index.md": {
    get: operations["GetProviderCDKTFDoc"];
  };
  "/registry/docs/providers/{namespace}/{name}/{version}/index.json": {
    get: operations["GetProviderVersion"];
  };
  "/registry/docs/providers/{namespace}/{name}/{version}/index.md": {
    get: operations["GetProviderDoc"];
  };
  "/registry/docs/providers/{namespace}/{name}/index.json": {
    get: operations["GetProvider"];
  };
  "/registry/docs/providers/index.json": {
    get: operations["GetProviderList"];
  };
  "/registry/docs/search": {
    get: operations["Search"];
  };
}

export interface definitions {
  /**
   * @description Addr describes a module address combination of NAMESPACE-NAME-TARGETSYSTEM. This will translate to
   * github.com/NAMESPACE/terraform-TARGETSYSTEM-NAME for now.
   */
  Addr: { [key: string]: unknown };
  /** BaseDetails is an embedded struct describing a module or a submodule. */
  BaseDetails: {
    edit_link?: string;
    outputs: { [key: string]: definitions["Output"] };
    /** @description Readme indicates that the submodule has a readme available. */
    readme: boolean;
    /**
     * @description SchemaError contains an error message to show why the schema is not available. This should be shown to the user
     * as a warning message.
     */
    schema_error: string;
    variables: { [key: string]: definitions["Variable"] };
  };
  DocItemName: string;
  GeneratedIndexHeader: {
    /** Format: date-time */
    last_updated?: string;
  };
  GeneratedIndexItem: {
    addition?: definitions["IndexItem"];
    deletion?: definitions["ItemDeletion"];
    header?: definitions["GeneratedIndexHeader"];
    type: definitions["GeneratedIndexItemType"];
  };
  /** @description enum: ["header","add","delete"] */
  GeneratedIndexItemType: string;
  IndexID: string;
  IndexItem: {
    addr?: string;
    description?: string;
    id?: definitions["IndexID"];
    /** Format: date-time */
    last_updated?: string;
    link?: { [key: string]: string };
    parent_id?: definitions["IndexID"];
    /** Format: int64 */
    popularity?: number;
    title?: string;
    type?: definitions["IndexType"];
    version?: string;
    /** Format: int64 */
    warnings?: number;
  };
  IndexType: string;
  ItemDeletion: {
    /** Format: date-time */
    deleted_at: string;
    id: definitions["IndexID"];
  };
  /**
   * @description License describes a license found in a repository. Note: the license detection is best effort. When displaying the
   * license to the user, always show a link to the actual license and warn users that they have to inspect the license
   * themselves.
   */
  License: {
    /**
     * Format: float
     * @description Confidence indicates how accurate the license detection is.
     */
    confidence: number;
    /** @description File holds the file in the repository where the license was detected. */
    file: string;
    /** @description IsCompatible signals if the license is compatible with the OpenTofu project. */
    is_compatible: boolean;
    /** @description Link may contain a link to the license file for humans to view. This may be empty. */
    link?: string;
    /** @description SPDX is the SPDX identifier for the license. */
    spdx: string;
  };
  /** List is a list of licenses found in a repository. */
  LicenseList: definitions["License"][];
  Module: {
    addr: definitions["ModuleAddr"];
    blocked_reason?: string;
    description: string;
    /**
     * Format: int64
     * @description ForkCount indicates how many forks this provider has.
     */
    fork_count: number;
    fork_of?: definitions["ModuleAddr"];
    /** @description ForkOfLink may contain a link to a repository this provider is forked from. */
    fork_of_link?: string;
    is_blocked: boolean;
    /**
     * Format: int64
     * @description Popularity indicates how popular the underlying repository is in the VCS system.
     */
    popularity: number;
    /**
     * Format: int64
     * @description UpstreamForkCount contains the number of forks of the upstream repository.
     */
    upstream_fork_count?: number;
    /**
     * Format: int64
     * @description UpstreamPopularity contains the popularity of the original repository this repository is forked of.
     */
    upstream_popularity?: number;
    versions: definitions["ModuleVersionDescriptor"][];
  };
  /**
   * @description ModuleAddr describes a module address enriched with data for the API. Use the Addr() function
   * to generate this from a module.Addr.
   */
  ModuleAddr: {
    /**
     * @description Contains the display version of the addr presentable to the end user. This may be
     * capitalized.
     */
    display: string;
    /** @description Contains the name of the addr. */
    name: string;
    /** @description Contains the namespace of the addr. */
    namespace: string;
    /** @description Contains the target system of the addr. */
    target: string;
  };
  ModuleCall: {
    module?: definitions["ModuleSchema"];
    source?: string;
    version_constraint?: string;
  };
  /** ModuleDependency describes a module call as a dependency as the UI expects it. */
  ModuleDependency: {
    name: string;
    source: string;
    version_constraint: string;
  };
  /** Details is an embedded struct describing a module or a submodule. */
  ModuleDetails: {
    dependencies: definitions["ModuleDependency"][];
    edit_link?: string;
    outputs: { [key: string]: definitions["Output"] };
    providers: definitions["ProviderDependency"][];
    /** @description Readme indicates that the submodule has a readme available. */
    readme: boolean;
    resources: definitions["Resource"][];
    /**
     * @description SchemaError contains an error message to show why the schema is not available. This should be shown to the user
     * as a warning message.
     */
    schema_error: string;
    variables: { [key: string]: definitions["Variable"] };
  };
  /**
   * @description Example describes a single example for a Documentation. You can query the files and the readme using the
   * corresponding API.
   */
  ModuleExample: {
    edit_link?: string;
    outputs: { [key: string]: definitions["Output"] };
    /** @description Readme indicates that the submodule has a readme available. */
    readme: boolean;
    /**
     * @description SchemaError contains an error message to show why the schema is not available. This should be shown to the user
     * as a warning message.
     */
    schema_error: string;
    variables: { [key: string]: definitions["Variable"] };
  };
  ModuleExpression: {
    references?: string[];
  };
  ModuleList: {
    modules: definitions["Module"][];
  };
  ModuleOutput: {
    description?: string;
    expression?: definitions["ModuleExpression"];
    sensitive?: boolean;
  };
  ModuleProviderConfigSchema: {
    full_name?: string;
    name?: string;
    version_constraint?: string;
  };
  ModuleResource: {
    address?: string;
    mode?: string;
    name?: string;
    provider_config_key?: string;
    /** Format: int64 */
    schema_version?: number;
    type?: string;
  };
  ModuleSchema: {
    module_calls?: { [key: string]: definitions["ModuleCall"] };
    outputs?: { [key: string]: definitions["ModuleOutput"] };
    provider_config?: {
      [key: string]: definitions["ModuleProviderConfigSchema"];
    };
    resources?: definitions["ModuleResource"][];
    variables?: { [key: string]: definitions["ModuleVariable"] };
  };
  ModuleSchemaRoot: {
    provider_config?: {
      [key: string]: definitions["ModuleProviderConfigSchema"];
    };
    root_module?: definitions["ModuleSchema"];
  };
  ModuleVariable: {
    default?: unknown;
    description?: string;
    required?: boolean;
    sensitive?: boolean;
    type?: string;
  };
  ModuleVersion: {
    dependencies: definitions["ModuleDependency"][];
    edit_link?: string;
    /** @description Examples lists all examples for this version. */
    examples: { [key: string]: definitions["ModuleExample"] };
    id: definitions["ModuleVersionNumber"];
    /** @description IncompatibleLicense indicates that there are no licenses or there is one or more license that are not approved. */
    incompatible_license: boolean;
    licenses: definitions["LicenseList"];
    /** @description Link holds the link to the repository browse URL. */
    link?: string;
    outputs: { [key: string]: definitions["Output"] };
    providers: definitions["ProviderDependency"][];
    /** Format: date-time */
    published: string;
    /** @description Readme indicates that the submodule has a readme available. */
    readme: boolean;
    resources: definitions["Resource"][];
    /**
     * @description SchemaError contains an error message to show why the schema is not available. This should be shown to the user
     * as a warning message.
     */
    schema_error: string;
    /** @description Submodules lists all submodules of this version. */
    submodules: { [key: string]: definitions["Submodule"] };
    variables: { [key: string]: definitions["Variable"] };
    /** @description VCSRepository holds the URL to the versioning system for this repository. */
    vcs_repository: string;
  };
  /** ModuleVersionDescriptor describes a single version. */
  ModuleVersionDescriptor: {
    id: definitions["ModuleVersionNumber"];
    /** Format: date-time */
    published: string;
  };
  /**
   * @description VersionNumber describes the semver version number. Note that in contrast to provider versions module versions
   * do not have a compulsory "v" prefix. Call ToVCSVersion() before you call Normalize() in order to get the correct
   * VCS version.
   */
  ModuleVersionNumber: string;
  /** Output describes a module output as the UI expects it. */
  Output: {
    description: string;
    sensitive: boolean;
  };
  /** Provider is a single provider with all its versions. */
  Provider: {
    addr: definitions["ProviderAddr"];
    blocked_reason?: string;
    canonical_addr?: definitions["ProviderAddr"];
    /** @description Description is the extracted description for the provider. This may be empty. */
    description: string;
    /**
     * Format: int64
     * @description ForkCount indicates how many forks this provider has.
     */
    fork_count: number;
    fork_of?: definitions["ProviderAddr"];
    /** @description ForkOfLink may contain a link to a repository this provider is forked from. */
    fork_of_link?: string;
    is_blocked: boolean;
    /**
     * @description Link contains the link to the repository this provider was built from. Note that this may not match the
     * Addr field since the repository may be different. Note that this field may not be available for all
     * providers.
     */
    link?: string;
    /**
     * Format: int64
     * @description Popularity indicates how popular the underlying repository is in the VCS system.
     */
    popularity: number;
    /**
     * @description ReverseAliases contains a list of providers that are aliases of the current one. This field is the inverse of
     * CanonicalAddr.
     */
    reverse_aliases?: definitions["ProviderAddr"][];
    /**
     * Format: int64
     * @description UpstreamForkCount contains the number of forks of the upstream repository.
     */
    upstream_fork_count?: number;
    /**
     * Format: int64
     * @description UpstreamPopularity contains the popularity of the original repository this repository is forked of.
     */
    upstream_popularity?: number;
    /** @description Versions holds the list of versions this provider supports. */
    versions: definitions["ProviderVersionDescriptor"][];
    /**
     * @description Warnings contains a list of warning strings issued to the OpenTofu client when fetching the provider info. This
     * typically indicates a deprecation or move of the provider to another location.
     */
    warnings?: string[];
  };
  /** ProviderAddr is an enriched model of provider.Addr with display properties for the frontend. */
  ProviderAddr: {
    /** @description Display contains the user-readable display variant of this addr. This may be capitalized. */
    display: string;
    /** @description Name contains the lower-case name part of the addr. */
    name: string;
    /** @description Namespace contains the lower-case namespace part of the addr. */
    namespace: string;
  };
  /** ProviderDependency describes a provider dependency of a module. */
  ProviderDependency: {
    alias: string;
    full_name: string;
    name: string;
    version_constraint: string;
  };
  /** ProviderDocItem describes a single documentation item. */
  ProviderDocItem: {
    description?: string;
    edit_link?: string;
    name?: definitions["DocItemName"];
    subcategory?: string;
    title?: string;
  };
  /** ProviderDocs describes either a provider or a CDKTF language. */
  ProviderDocs: {
    datasources: definitions["ProviderDocItem"][];
    functions: definitions["ProviderDocItem"][];
    guides: definitions["ProviderDocItem"][];
    index?: definitions["ProviderDocItem"];
    resources: definitions["ProviderDocItem"][];
  };
  /** ProviderList is a list of providers. */
  ProviderList: {
    /** @description Providers holds the list of providers. */
    providers: definitions["Provider"][];
  };
  /** ProviderVersion describes a single provider version. */
  ProviderVersion: {
    cdktf_docs: { [key: string]: definitions["ProviderDocs"] };
    docs: definitions["ProviderDocs"];
    id: definitions["ProviderVersionNumber"];
    /** @description IncompatibleLicense indicates that there are no licenses or there is one or more license that are not approved. */
    incompatible_license: boolean;
    license: definitions["LicenseList"];
    link?: string;
    /** Format: date-time */
    published: string;
  };
  /** ProviderVersionDescriptor describes a provider version. */
  ProviderVersionDescriptor: {
    id: definitions["ProviderVersionNumber"];
    /** Format: date-time */
    published: string;
  };
  /** VersionNumber describes the semver version number. */
  ProviderVersionNumber: string;
  /** Resource describes a resource a module uses as the UI expects it. */
  Resource: {
    address: string;
    name: string;
    type: string;
  };
  /** SearchResultItem describes a single search result item. */
  SearchResultItem: {
    /** @description The address of the module or provider. */
    addr: string;
    /** @description A brief description of the result item. */
    description: string;
    /** @description The unique identifier for the result item. */
    id: string;
    /** @description The last updated timestamp for the result item. */
    last_updated: string;
    /** @description A map of variables used to generate the link for the result item. */
    link_variables: { [key: string]: string };
    /**
     * Format: int32
     * @description The rank of the result in the search results.
     */
    rank: number;
    /** @description The number of times the search term matched in this result. */
    term_match_count: string;
    /** @description The title of the result item. */
    title: string;
    /** @description The type of the result item (e.g., module, provider, datasource etc). */
    type: string;
    /** @description The version of the module or provider */
    version: string;
  };
  /** Submodule describes a submodule within a module. */
  Submodule: {
    dependencies: definitions["ModuleDependency"][];
    edit_link?: string;
    outputs: { [key: string]: definitions["Output"] };
    providers: definitions["ProviderDependency"][];
    /** @description Readme indicates that the submodule has a readme available. */
    readme: boolean;
    resources: definitions["Resource"][];
    /**
     * @description SchemaError contains an error message to show why the schema is not available. This should be shown to the user
     * as a warning message.
     */
    schema_error: string;
    variables: { [key: string]: definitions["Variable"] };
  };
  /** Variable describes a variable as the UI expects it. */
  Variable: {
    default: unknown;
    description: string;
    required: boolean;
    sensitive: boolean;
    type: string;
  };
}

export interface operations {
  GetModuleReadme: {
    parameters: {
      path: {
        /** Namespace of the module, all lower case. */
        namespace: string;
        /** Name of the module, all lower case. */
        name: string;
        /** Target system of the module, all lower case. */
        target: string;
        /** Version number of the module with the "v" prefix. */
        version: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetModuleExampleReadme: {
    parameters: {
      path: {
        /** Namespace of the module, all lower case. */
        namespace: string;
        /** Name of the module, all lower case. */
        name: string;
        /** Target system of the module, all lower case. */
        target: string;
        /** Version number of the module with the "v" prefix. */
        version: string;
        /** Example name. */
        example: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetModuleVersion: {
    parameters: {
      path: {
        /** Namespace of the module, all lower case. */
        namespace: string;
        /** Name of the module, all lower case. */
        name: string;
        /** Target system of the module, all lower case. */
        target: string;
        /** Version number of the module with the "v" prefix. */
        version: string;
      };
    };
    responses: {
      /** The details of a specific module version. */
      200: {
        schema: definitions["ModuleVersion"];
      };
    };
  };
  GetSubmoduleReadme: {
    parameters: {
      path: {
        /** Namespace of the module, all lower case. */
        namespace: string;
        /** Name of the module, all lower case. */
        name: string;
        /** Target system of the module, all lower case. */
        target: string;
        /** Version number of the module with the "v" prefix. */
        version: string;
        /** Submodule name. */
        submodule: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetModule: {
    parameters: {
      path: {
        /** Namespace of the module, all lower case. */
        namespace: string;
        /** Name of the module, all lower case. */
        name: string;
        /** Target system of the module, all lower case. */
        target: string;
      };
    };
    responses: {
      /** A list of all versions of a module with metadata. */
      200: {
        schema: definitions["Module"];
      };
    };
  };
  GetModuleList: {
    responses: {
      /** A list of all modules. */
      200: {
        schema: definitions["ModuleList"];
      };
    };
  };
  GetProviderDocItem: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
        /** Version number of the provider with the "v" prefix. */
        version: string;
        /** The kind of document to fetch. */
        kind: "resource" | "datasource" | "function" | "guide";
        /** The name of the document without the .md suffix. */
        document: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetProviderCDKTFDocItem: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
        /** Version number of the provider with the "v" prefix. */
        version: string;
        /** The CDKTF language to fetch. */
        language: "typescript" | "python" | "go" | "csharp" | "java";
        /** The kind of document to fetch. */
        kind: "resource" | "datasource" | "function" | "guide";
        /** The name of the document without the .md suffix. */
        document: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetProviderCDKTFDoc: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
        /** Version number of the provider with the "v" prefix. */
        version: string;
        /** The CDKTF language to fetch. */
        language: "typescript" | "python" | "go" | "csharp" | "java";
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetProviderVersion: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
        /** Version number of the provider with the "v" prefix. */
        version: string;
      };
    };
    responses: {
      /** The details of a specific provider version. */
      200: {
        schema: definitions["ProviderVersion"];
      };
    };
  };
  GetProviderDoc: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
        /** Version number of the provider with the "v" prefix. */
        version: string;
      };
    };
    responses: {
      /** The contents of the document. */
      200: {
        schema: unknown;
      };
    };
  };
  GetProvider: {
    parameters: {
      path: {
        /** Namespace of the provider, all lower case. */
        namespace: string;
        /** Name of the provider, all lower case. */
        name: string;
      };
    };
    responses: {
      /** A list of all versions of a provider with metadata. */
      200: {
        schema: definitions["Provider"];
      };
    };
  };
  GetProviderList: {
    responses: {
      /** A list of all providers. */
      200: {
        schema: definitions["ProviderList"];
      };
    };
  };
  Search: {
    parameters: {
      query: {
        /** The search query string. This should be a URL encoded string. */
        q: string;
      };
    };
    responses: {
      /** A list of search results matching the query. */
      200: {
        schema: definitions["SearchResultItem"][];
      };
      /** Invalid search query. */
      400: unknown;
    };
  };
}

export interface external {}
